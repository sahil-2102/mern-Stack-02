import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const app = express();
app.get('/api/ping', (req,res) => {
    res.json({message: "pong"});
});
connectDB();
app.listen(process.env.PORT,() => {
    console.log(`server running on port : ${process.env.PORT}`);
});