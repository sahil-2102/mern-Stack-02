import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get('/api/ping', (req,res) => {
    res.json({message: "pong"});
});

app.listen(process.env.PORT,() => {
    console.log(`server running on port : ${process.env.PORT}`);
});