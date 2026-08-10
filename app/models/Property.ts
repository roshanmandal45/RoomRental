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

  price: number;

  bedrooms?: number;
  bathrooms?: number;

  images: string[];

  city: string;
  area: string;
  address: string;

  amenities: string[];

  status: "AVAILABLE" | "RENTED" | "SOLD";

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

    city: {
      type: String,
      required: true,
      trim: true,
    },

    area: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    amenities: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["AVAILABLE", "RENTED", "SOLD"],
      default: "AVAILABLE",
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