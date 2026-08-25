import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/models/User";
import { adminAuth } from "@/app/lib/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authentication token missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split("Bearer ")[1];

    // Verify token with Firebase Admin
    const decodedToken = await adminAuth.verifyIdToken(token);
    const firebaseUid = decodedToken.uid;
    const email = decodedToken.email;

    if (!email) {
      return NextResponse.json(
        { message: "Firebase account has no associated email" },
        { status: 400 }
      );
    }

    const body = await req.json().catch(() => ({}));
    
    // Fallback safely to decoded token values if body fields are empty/null
    const name = body.name?.trim() || decodedToken.name || "User";
    const profileImage = body.profileImage || decodedToken.picture || "";

    await dbConnect();

    // Query by firebaseUid OR email to catch existing accounts safely
    let user = await User.findOne({
      $or: [{ firebaseUid }, { email }],
    });

    if (user) {
      // Link firebaseUid if missing (e.g., registered with credentials before)
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

    // Create new MongoDB user
    user = await User.create({
      firebaseUid,
      name,
      email,
      profileImage,
      role: "renter",
    });

    return NextResponse.json(
      {
        message: "User synced successfully",
        user,
        alreadyExists: false,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("SERVER API ERROR (/api/users):", error);

    // MongoDB duplicate key error (E11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Account with this email already exists.", alreadyExists: true },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}