import type { APIRoute } from "astro";
import { UserSchema } from "../../models/Models";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const fName = data.get("fName");
    const sName = data.get("sName");
    const email = data.get("email");
    const phone = data.get("phone");
console.log('HELLO');
    console.log(UserSchema.parse(data));
    return new Response(
        JSON.stringify({
            message: "Success"
        }),
        {status: 200}
    );
};