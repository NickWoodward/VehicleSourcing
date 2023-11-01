import type { APIRoute } from "astro";
import { UserSchema } from "../../models/Models"; 

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
    console.log('data', request.data);
    // const data = await request.formData();
    // const fName = data.get("fName");
    // const sName = data.get("sName");
    // const email = data.get("email");
    // const phone = data.get("phone");

    // // console.log('USER:', UserSchema.parse(data));
    console.log(request);


    return new Response(
        JSON.stringify({
            message: "Success"
        }),
        {status: 200}
    );
};