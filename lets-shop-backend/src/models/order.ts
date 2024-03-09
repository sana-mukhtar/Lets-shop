import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pinCode: {
        type: Number,
        required: true,
      },
    },

    user:{
      type:String,
      ref:"User",
      required:true,
    },
    subtotal:{
      type:Number,
      required:true,
    }
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", schema);
