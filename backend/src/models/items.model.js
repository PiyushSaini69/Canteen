import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const itemsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: false,
        },
        available: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true
    }
)

export const Items = mongoose.model("Items", itemsSchema)