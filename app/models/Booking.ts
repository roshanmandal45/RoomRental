import mongoose, { Schema, Document, models } from "mongoose";

export interface IBooking extends Document {
  property: mongoose.Types.ObjectId;
  renter: mongoose.Types.ObjectId;

  startDate: Date;
  endDate?: Date;

  totalAmount: number;

  status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED" | "COMPLETED";

  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    renter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "APPROVED",
        "REJECTED",
        "CANCELLED",
        "COMPLETED",
      ],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  models.Booking ||
  mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;