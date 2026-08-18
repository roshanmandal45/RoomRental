import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User"

 // Get Users
export async function GET() {
    try {
       await dbConnect()
       console.log("Db connected successfully")
       const users = await User.find()
       return Response.json(users, { status: 200 })
    } catch(error) {
     console.log("failed to fetch users", error)
     return Response.json({message: "Failed to fetch users"}, { status: 500 } )
    }
}


 // Create Users
export async function POST() {

}