import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { Order } from "../models/order.model.js"
import { Items } from "../models/items.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const orderCreated = asyncHandler(async (req, res) => {
    const { cartData, userData, ip, location } = req.body;

    try {
        const orderItems = cartData.map(item => ({
            itemId: item._id,
            quantity: item.quantity,
            price: item.price,
        }));

        const totalPrice = cartData.reduce((total, item) => total + (item.price * item.quantity), 0);

        const newOrder = new Order({
            userId: userData.data.user._id,
            orderItems,
            totalPrice,
            latitude: location.latitude.toString(),
            longitude: location.longitude.toString(),
            iplocation: ip,
        });
        const orderData = await newOrder.save();

        return res.status(201).json(
            new ApiResponse(200, orderData, "Order created Successfully")
        )
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

})
const allorder = asyncHandler(async (req, res) => {
    const orderData = await Order.find({})
    return res.status(200).json(
        new ApiResponse(200, orderData, "Order data Successfully")
    )

})
export {
    orderCreated,
    allorder
}