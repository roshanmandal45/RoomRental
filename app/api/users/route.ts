import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { adminAuth } from "@/app/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    // 1. Get Firebase ID token from header
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authentication token missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split("Bearer ")[1];

    // 2. Verify Firebase token using Admin SDK
    const decodedToken = await adminAuth.verifyIdToken(token);
    const firebaseUid = decodedToken.uid;
    const email = decodedToken.email;

    if (!email) {
      return NextResponse.json(
        { message: "Firebase account has no email address" },
        { status: 400 }
      );
    }

    // 3. Parse request body safely
    const body = await req.json().catch(() => ({}));
    const name = body.name?.trim();
    const profileImage = body.profileImage;

    // 4. Connect to MongoDB
    await dbConnect();

    // 5. Check if user exists by firebaseUid OR by email
    let user = await User.findOne({
      $or: [{ firebaseUid }, { email }],
    });

    if (user) {
      // If user exists by email but firebaseUid isn't linked yet, update it
      if (!user.firebaseUid) {
        user.firebaseUid = firebaseUid;
        await user.save();
      }

      return NextResponse.json(
        {
          message: "User already exists",
          user,
          alreadyExists: true,
        },
        { status: 200 }
      );
    }

    // 6. Create new MongoDB user
    user = await User.create({
      firebaseUid,
      name: name || decodedToken.name || "User",
      email,
      profileImage: profileImage || decodedToken.picture || "",
      role: "renter",
    });

    // 7. Return created user
    return NextResponse.json(
      {
        message: "User created successfully",
        user,
        alreadyExists: false,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("USER ROUTE API ERROR:", error);

    // Handle MongoDB duplicate key error specifically (E11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Handle invalid Firebase token
    if (error.code?.startsWith("auth/")) {
      return NextResponse.json(
        { message: "Invalid or expired authentication token." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}