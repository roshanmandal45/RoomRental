import dbConnect from "@/app/lib/dbConnect";
import Booking from "@/app/models/Booking";

// Get Bookings
export async function GET() {
    try {
        await dbConnect();

        const bookings = await Booking.find();

        return Response.json(bookings, { status: 200 });

    } catch (error) {
        console.log("Failed to fetch bookings:", error);

        return Response.json(
            { message: "Failed to fetch bookings" },
            { status: 500 }
        );
    }
}

// Create Booking
export async function POST() {

}