import mongoose, { Schema, Document, models } from "mongoose";

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  property: mongoose.Types.ObjectId;

  rating: number;
  comment?: string;

  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review =
  models.Review ||
  mongoose.model<IReview>("Review", ReviewSchema);

export default Review;