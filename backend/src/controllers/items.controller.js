import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import { Order } from "../models/order.model.js"
import { Items } from "../models/items.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const createItem = asyncHandler(async (req, res) => {
    const { name, description, price, category, available } = req.body
    const item = await Items.create({
        name,
        description,
        price,
        category,
        available,
        imageUrl: req.files.imageUrl[0].filename,
    })
    const createdItem = await item.save()
    return res.status(201).json(
        new ApiResponse(200, createdItem, "Item created Successfully")
    )

})

const allItem = asyncHandler(async (req, res) => {

    const itemData = await Items.find({})
    return res.status(201).json(
        new ApiResponse(200, itemData, "Item data Successfully")
    )

})




export {
    createItem,
    allItem
}