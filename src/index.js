import dotenv from "dotenv";
dotenv.config ({
    path : './config.env',
})


import express from "express";
export const app = express();

import { connectDB } from "./data/mongoose.js";

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000 , () => console.log(`server is running on PORT ${process.env.PORT}`));
}).catch((error)=>{
    console.log("MongoDB connection failed",error);
});



