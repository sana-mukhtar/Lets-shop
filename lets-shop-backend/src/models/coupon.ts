import mongoose from "mongoose";

const schema = new mongoose.Schema({
  coupon: {
    type: String,
    required: [true, "Enter Coupon Code"],
    unique: true,
  },
  amount: {
    type: Number,
    required: [true, "Enter Discount Amount"],
  },
});

export const Coupon = mongoose.model("Coupon", schema);
