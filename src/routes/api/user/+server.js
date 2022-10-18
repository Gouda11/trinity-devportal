import User from "../../../models/auth";


export const GET = async() => {
    try {
        const taluks = await User.find();
        return new Response(JSON.stringify(taluks), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Not Found" }), { status: 400 });
    }
}