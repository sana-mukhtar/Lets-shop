import express, { NextFunction, Request, Response } from "express";
import { connectDB } from "./utils/features.js";
const port = 3000;

connectDB();
const app = express();

app.use(express.json());   //middleware=app.use

app.get("/" , (req, res)=>{   
    res.send("API working with /api/v1");
})

//import userRoutes
import userRoutes from "./routes/user.js";
import { Error } from "mongoose";
app.use("/api/v1/user" , userRoutes);

app.use((err:Error , req:Request , res:Response , next:NextFunction)=>{
    return res.status(400).json({
        success:true , 
        message:"some error"
    });
})


app.listen(port , ()=>{
    console.log(`Express is running on ${port}`);
})