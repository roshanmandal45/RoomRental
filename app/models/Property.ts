import mongoose, { Schema, Document, models } from "mongoose";

export interface IProperty extends Document {
  owner: mongoose.Types.ObjectId;

  title: string;
  description?: string;

  propertyType:
    | "ROOM"
    | "BK"
    | "BHK"
    | "FLAT"
    | "APARTMENT"
    | "HOUSE"
    | "HOSTEL"
    | "HOTEL"
    | "COTTAGE"
    | "OFFICE_SPACE";

  listingType: "RENT" | "SALE";

  // Number of rooms/units available for this listing
  units: number;

  // Monthly rent for RENT listings or sale price for SALE listings
  price: number;

  bedrooms?: number;
  bathrooms?: number;

  // Cloudinary image URLs
  images: string[];

  location: string;
  amenities: string[];

  // Optional YouTube walkthrough link
  youtubeVideo?: string;

  status: "AVAILABLE" | "RENTED" | "SOLD";
  isFeatured: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema = new Schema<IProperty>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },

    description: {
      type: String,
      trim: true,
    },

    propertyType: {
      type: String,
      enum: [
        "ROOM",
        "BK",
        "BHK",
        "FLAT",
        "APARTMENT",
        "HOUSE",
        "HOSTEL",
        "HOTEL",
        "COTTAGE",
        "OFFICE_SPACE",
      ],
      required: true,
    },

    listingType: {
      type: String,
      enum: ["RENT", "SALE"],
      required: true,
    },

    units: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    bedrooms: {
      type: Number,
      min: 0,
    },

    bathrooms: {
      type: Number,
      min: 0,
    },

    images: {
      type: [String],
      default: [],
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    amenities: {
      type: [String],
      default: [],
    },

    youtubeVideo: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["AVAILABLE", "RENTED", "SOLD"],
      default: "AVAILABLE",
    },
    isFeatured: {
  type: Boolean,
  default: false,
},
  },
  {
    timestamps: true,
  }
);

const Property =
  models.Property ||
  mongoose.model<IProperty>("Property", PropertySchema);

export default Property;