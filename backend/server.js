import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json()); // Needed to parse JSON body
app.use(cors());
app.use("/api/notes", noteRoutes);
connectDB();
app.listen(process.env.PORT,() => {
    console.log(`server running on port : ${process.env.PORT}`);
});