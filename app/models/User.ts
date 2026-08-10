import mongoose, { Schema, models, Document } from "mongoose"

export interface IUser extends Document {
    name: string,
    email: string,
    phone?: string,
    profileImage?: string,
    role: "renter" | "owner" | "admin",
}

const UserSchema = new Schema<IUser>(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        profileImage: {
            type: String
        },
        role: {
         type: String,
         enum: ["renter", "owner", "admin"],
         default: "renter"
        }
    },
    {
    timestamps: true
    }
)

const User = models.User || mongoose.model<IUser>("User", UserSchema)
export default User