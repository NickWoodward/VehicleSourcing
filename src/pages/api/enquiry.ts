export const prerender = false;

import type { APIRoute } from "astro";
import formData from 'form-data';
import Mailgun from 'mailgun.js';

import { FormSchema } from "../../models/Models"; 
const TURNSTILE_VERIFY_ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const TURNSTILE_KEY = import.meta.env.TURNSTILE_KEY;
const API_KEY = import.meta.env.MAILGUN_KEY;
const MAIL_RECIPIENT = import.meta.env.MAIL_RECIPIENT;
const DOMAIN = 'YOUR_DOMAIN_NAME';



// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});

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
      carValues
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
    
    // Send email
    console.log({carValues}, {personValues});

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({username: 'api', key: API_KEY, url: 'https://api.eu.mailgun.net'});

    const messageData = {
      from: personValues.email,
      to: MAIL_RECIPIENT,
      subject: 'Enquiry',
      text: JSON.stringify({
        carValues,
        personValues
      })
    };

    const messageRes = await client.messages.create(DOMAIN, messageData);

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