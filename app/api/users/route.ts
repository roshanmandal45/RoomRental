import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { adminAuth } from "@/app/lib/firebaseAdmin";


// POST /api/users
export async function POST(req: Request) {
  try {
    // 1. Get Firebase ID token from request
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return Response.json(
        { message: "Authentication token missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split("Bearer ")[1];

    // 2. Verify Firebase token
    const decodedToken = await adminAuth.verifyIdToken(token);

    const firebaseUid = decodedToken.uid;
    const email = decodedToken.email;

    if (!email) {
      return Response.json(
        { message: "Firebase account has no email" },
        { status: 400 }
      );
    }

    // 3. Get user information sent from frontend
    const body = await req.json();

    const name = body.name;
    const profileImage = body.profileImage;

    // 4. Connect to MongoDB
    await dbConnect();

    // 5. Check whether this Firebase user already exists
    let user = await User.findOne({ firebaseUid });

    // If user already exists, don't create another one
    if (user) {
      return Response.json(
        {
          message: "User already exists",
          user,
        },
        { status: 200 }
      );
    }

    // 6. Create MongoDB user
    user = await User.create({
      firebaseUid,
      name: name || "User",
      email,
      profileImage: profileImage || "",
      role: "renter",
    });

    // 7. Send MongoDB user back
    return Response.json(
      {
        message: "User synced successfully",
        user,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("User sync error:", error);

    return Response.json(
      {
        message: "Failed to sync user",
      },
      { status: 500 }
    );
  }
}