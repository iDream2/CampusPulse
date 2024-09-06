import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors())
const allowedOrigins = ["http://localhost:5173"]

app.use(cors({
    origin : allowedOrigins
}))

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

app.use(express.json({limit: "16kb"}) )
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import chapterRouter from "./routes/chapter.routes.js"
//routes decleration
app.use("/api/v1/chapter", chapterRouter)

import postRouter from "./routes/post.routes.js"
app.use("/api/v1/post", postRouter)

export default app;