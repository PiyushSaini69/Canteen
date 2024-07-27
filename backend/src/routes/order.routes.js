import { Router } from "express";
import {
    orderCreated
} from "../controllers/order.controller.js";


const router = Router()

router.route("/order_create").post(orderCreated)

export default router