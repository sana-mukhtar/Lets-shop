import mongoose from "mongoose";
import { Interface } from "readline";
import validator from "validator";

interface IUser extends Document {
  _id: String;
  name: String;
  email: String;
  gender:"Male" | "Female";
  dob:Date;
  photo:String;
  role:"user"| "admin";

}
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: [true, "Enter your ID"],
    },
    name: {
      type: String,
      require: [true, "Enter your name"],
    },
    email: {
      type: String,
      require: [true, "Enter your email"],
      unique : [true , "Email Already exists"],
      validate : validator.default.isEmail,
    },
    gender: {
      type: String,
      enum : ["Male" , "Female"],
      require: [true, "Enter your gender"],
    },
     dob: {
      type: Date,
      require: [true, "Enter your date of birth"],
    },
    photo: {
      type: String,
      require: [true, "Add your photo"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.virtual("age").get(function(){
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if(today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate()<dob.getDate())
    ) age--;
  
    return age;
})

export const User = mongoose.model("User" , userSchema);