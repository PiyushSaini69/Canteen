import { Router } from "express";
import {
    createItem,
    allItem
} from "../controllers/items.controller.js";
import { upload } from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/createitem").post(upload.fields([{ name: 'imageUrl', maxCount: 1 }]), createItem)
router.route('/allitem').get(allItem)


export default router