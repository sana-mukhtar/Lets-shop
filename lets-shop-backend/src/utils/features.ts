import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017", {
      dbName: "Lets Shop",
    });

}