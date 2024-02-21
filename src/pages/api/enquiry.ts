export const prerender = false;

import type { APIRoute } from "astro";
import formData from 'form-data';
import Mailgun from 'mailgun.js';

import { FormSchema } from "../../models/Models"; 
const TURNSTILE_VERIFY_ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const TURNSTILE_KEY = import.meta.env.TURNSTILE_KEY;
const MAILGUN_KEY = import.meta.env.MAILGUN_KEY;
const MAILGUN_URL = import.meta.env.MAILGUN_URL;
const MAILGUN_RECIPIENT = import.meta.env.MAILGUN_RECIPIENT;
const MAILGUN_DOMAIN = import.meta.env.MAILGUN_DOMAIN;



// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: 'api', key: MAILGUN_KEY, url: 'https://api.eu.mailgun.net'});

// const messageData = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'foo@example.com, bar@example.com',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };

// client.messages.create(DOMAIN, messageData)
//  .then((res) => {
//    console.log(res);
//  })
//  .catch((err) => {
//    console.error(err);
//  });


export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const { 
      turnstile: token, 
      personValues,
      carValues,
      pxValues
    } = body;

    // Validate form
    if(!body || FormSchema.safeParse({token, ...personValues, ...carValues}).success !== true) {
      return new Response(null, {
          status: 404,
          statusText: 'Not found!'
      });
    }

    try {
      // Validate token
      const res = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
          method: 'POST',
          body: `secret=${encodeURIComponent(TURNSTILE_KEY)}&response=${encodeURIComponent(token)}`,
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
      });
      
      const data = await res.json();
      // Token failure
      if(!data.success) {
        return new Response(JSON.stringify(data), {
          status: 400,
          headers: {
            'content-type': 'application/json'
          }
        })
      }
    
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({username: 'api', key: MAILGUN_KEY, url: MAILGUN_URL});

    const {fName, sName, email, phone} = personValues;
    const {manufacturer, model, year, mileage} = carValues;
    const {registrationNumber, make, yearOfManufacture, colour, engineCapacity, motExpiryDate} = pxValues;
    const messageData = {
      from: personValues.email,
      to: MAILGUN_RECIPIENT,
      subject: 'Enquiry',
      text: `${fName} ${sName}.\n ${email}.\n ${phone}.\n The car:\n ${manufacturer} ${model} ${year} ${mileage}.\n PX: ${registrationNumber? registrationNumber:""}.\n ${make? make:""}.\n ${yearOfManufacture? yearOfManufacture:""}.\n ${colour? colour:""}.\n ${engineCapacity? engineCapacity:""}.\n ${motExpiryDate? motExpiryDate:""}.`,
      // text: JSON.stringify({
      //   carValues,
      //   personValues
      // })
    };

    const messageRes = await client.messages.create(MAILGUN_DOMAIN, messageData);

    console.log(messageRes);

    return new Response(JSON.stringify({carValues, personValues}), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })

  } catch(e) {
    console.log(e);
    return new Response(JSON.stringify('Request failed'), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
};