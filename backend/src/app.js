import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//routes import
import userRouter from './routes/user.routes.js'
import itemRouter from './routes/items.routes.js'
import orderRouter from './routes/order.routes.js'

//routes declaration
app.use("/users", userRouter)
app.use("/items", itemRouter)
app.use("/order", orderRouter)

app.get('/items/image/:imageName', (req, res) => {
    try {
        const imageName = req.params.imageName;
        const imagePath = path.join(__dirname, '../public/temp', imageName);
        res.sendFile(imagePath);
    }
    catch (err) {
        res.status(500).json({ data: null, message: err.message })
    }
});

export { app }