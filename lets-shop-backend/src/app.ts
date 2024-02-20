import express from "express";
const port = 3000;
const app = express();

//import userRoutes
import userRoutes from "./routes/user.js";
app.use("/api/v1/user" , userRoutes);


app.listen(port , ()=>{
    console.log(`Express is running on ${port}`);
})