import dbConnect from "@/app/lib/dbConnect";
import Property from "@/app/models/Property";
import User from "@/app/models/User";
import { adminAuth } from "@/app/lib/firebaseAdmin";
import cloudinary from "@/app/lib/cloudinary";


// GET Properties
// GET Properties
export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const section = searchParams.get("section");
    const place = searchParams.get("place");
    const search = searchParams.get("search")?.trim();

    // 🔎 SEARCH PROPERTIES
    // Example:
    // /api/properties?search=room
    // /api/properties?search=kathmandu
    // /api/properties?search=apartment
    if (search) {
      const regex = new RegExp(
        search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      const properties = await Property.find({
        status: "AVAILABLE",
        listingType: "RENT",

        $or: [
          { title: regex },
          { description: regex },
          { propertyType: regex },
          { location: regex },
          { amenities: regex },
        ],
      })
        .sort({ createdAt: -1 })
        .limit(10)
        .lean();

      return Response.json(
        {
          success: true,
          properties,
        },
        { status: 200 }
      );
    }

    // Cheapest Rooms
    if (section === "cheapest") {
      const properties = await Property.find({
        status: "AVAILABLE",
        listingType: "RENT",
      })
        .sort({ price: 1 })
        .limit(8);

      return Response.json(properties);
    }

    // Latest Rooms
    if (section === "latest") {
      const properties = await Property.find({
        status: "AVAILABLE",
      })
        .sort({ createdAt: -1 })
        .limit(8);

      return Response.json(properties);
    }

    // Random Featured Properties
    if (section === "featured") {
      const properties = await Property.aggregate([
        {
          $match: {
            status: "AVAILABLE",
            listingType: "RENT",
          },
        },
        {
          $sample: {
            size: 8,
          },
        },
      ]);

      return Response.json(properties);
    }

    // Properties by place
    if (section === "place" && place) {
      const properties = await Property.find({
        status: "AVAILABLE",
        listingType: "RENT",
        location: {
          $regex: place,
          $options: "i",
        },
      })
        .sort({ createdAt: -1 })
        .limit(8);

      return Response.json(properties, { status: 200 });
    }

    return Response.json(
      {
        message: "Invalid section or missing parameters",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Property GET error:", error);

    return Response.json(
      {
        message: "Failed connecting database",
      },
      { status: 500 }
    );
  }
}

// POST Property
export async function POST(req: Request) {
  try {
    // 1. Get Firebase token from request
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

    // This is the Firebase UID
    const firebaseUid = decodedToken.uid;

    // 3. Connect to MongoDB
    await dbConnect();

    // 4. Find the MongoDB user using Firebase UID
    const user = await User.findOne({ firebaseUid });

    if (!user) {
      return Response.json(
        { message: "User not found in MongoDB" },
        { status: 404 }
      );
    }

    // 5. Read FormData
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const propertyType = formData.get("propertyType") as string;
    const unit = Number(formData.get("unit"));
    const price = Number(formData.get("price"));
    const location = formData.get("location") as string;
    const youtubeVideo = formData.get("youtubeVideo") as string;

    const amenitiesData = formData.get("amenities") as string;

    const amenities: string[] = JSON.parse(amenitiesData || "[]");

    // 6. Get uploaded image files
    const imageFiles = formData.getAll("images") as File[];

    // 7. Upload images to Cloudinary
    const imageUrls: string[] = [];

    for (const file of imageFiles) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "room-rental/properties",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        uploadStream.end(buffer);
      });

      imageUrls.push(result.secure_url);
    }

    // 8. Create Property document
    const property = await Property.create({
      owner: user._id,

      title,
      description,

      propertyType,

      listingType: "RENT",

      units: unit,

      price,

      location,

      amenities,

      images: imageUrls,

      youtubeVideo,

      status: "AVAILABLE",
    });

    // 9. Send created property back to frontend
    return Response.json(
      {
        message: "Property created successfully",
        property,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Property creation error:", error);

    return Response.json(
      {
        message: "Failed to create property",
      },
      { status: 500 }
    );
  }
}