import mongoose from "mongoose"

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_URI))
    } catch (error) {
        console.log(error.message)
    }
}