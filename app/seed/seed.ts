import dbConnect from "../lib/dbConnect";

// Importing datas 
import bookings from "../data/booking";
import users from "../data/user";
import properties from "../data/property";

// Importing Models 
import User from "../models/User";
import Property from "../models/Property";
import Booking from "../models/Booking";

async function seedDatabase(){
    try {
       await dbConnect()
       console.log("Connected To Database")
       
       // Seeding Users
       
    } catch (error) {
        console.log(error)
    }
}