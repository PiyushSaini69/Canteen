import { Router } from "express";
import {
    orderCreated,
    allorder
} from "../controllers/order.controller.js";


const router = Router()

router.route("/order_create").post(orderCreated)
router.route("/all_order").get(allorder)

export default router