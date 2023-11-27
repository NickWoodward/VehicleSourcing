import type { APIRoute } from "astro";
import { PersonSchema } from "../../models/Models"; 

export const prerender = false;

export const post: APIRoute = async ({ request }) => {

    const body = await request.json()
console.log(body);
    // const data = await request.formData();
    // const fName = data.get("fName");
    // const sName = data.get("sName");
    // const email = data.get("email");
    // const phone = data.get("phone");

    // // console.log('USER:', PersonSchema.parse(data));
    // console.log(request);


    return new Response(
        JSON.stringify({
            message: "Success"
        }),
        {status: 200}
    );
};