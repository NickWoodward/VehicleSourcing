export const prerender = false;
import axios from 'axios';
import type { APIRoute } from "astro";

const DVLA_KEY = import.meta.env.DVLA_KEY;
const DVLA_TEST_KEY = import.meta.env.DVLA_TEST_KEY;
const DVLA_TEST_URL = import.meta.env.DVLA_TEST_URL;
const DVLA_URL = import.meta.env.DVLA_URL;

export const POST: APIRoute = async ({ request }) => {
  console.log('called dvla api')
  const body = await request.json();
  const numberplate = body.numberplate
  if(!body.numberplate) {
    console.log('Error in DVLA API: Missing numberplate');
    return new Response(JSON.stringify({success: false}), {
      status: 400,
    })
  }
  const data = JSON.stringify({ registrationNumber: numberplate });
  const config = {
    method: 'post',
    url: DVLA_URL,
    headers: {
      'x-api-key': DVLA_KEY,
      'Content-Type': 'application/json',
    },
    data: data,
  };
  
  try {
    const res = await axios(config);
    console.log(res.data)
    const { 
      data: { 
        registrationNumber,
        make,
        yearOfManufacture,
        colour,
        engineCapacity,
        motExpiryDate,
        taxDueDate
      } 
    } = res;

    return new Response(JSON.stringify({
      data: {
        registrationNumber,
        make,
        yearOfManufacture,
        colour,
        engineCapacity,
        motExpiryDate,
        taxDueDate
      }
    
    }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })

  } catch (error) {
    console.log("***** Error in DVLA API *****", error);
    return new Response(JSON.stringify({success: false}), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
 
}