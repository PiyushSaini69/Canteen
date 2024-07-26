import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { Order } from "../models/order.model.js"
import { Items } from "../models/items.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password,role } = req.body
    //console.log("email: ", email);

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        return res.status(409).json(
            new ApiError(409, "User with email or username already exists")
        )
    }
    //console.log(req.files);
    const user = await User.create({
        email,
        password,
        username: username.trim().toLowerCase(),
        role:role
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})





export {
    registerUser,
}