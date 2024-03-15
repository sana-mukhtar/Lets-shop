import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { Coupon } from "../models/coupon.js";
import ErrorHandler from "../utils/utility-class.js";

export const newCoupon = TryCatch(async (req: Request, res, next) => {
  const { coupon, amount } = req.body;
  if (!coupon || !amount)
    return next(new ErrorHandler("Enter Coupon code and discount amount", 400));

  await Coupon.create({ code: coupon, amount });
  return res.status(201).json({
    success: true,
    message: `Coupon ${coupon} Created Successfully`,
  });
});

export const applyDiscount = TryCatch(async (req: Request, res, next) => {
  const { coupon } = req.query;
  const discount = await Coupon.findOne({code:coupon});
  if (!discount)
    return next(new ErrorHandler("Invalid Coupon Code", 400));

  return res.status(201).json({
    success: true,
    discount:discount.amount,
  });
});


export const allCoupons = TryCatch(async (req: Request, res, next) => {
  const coupons = await Coupon.find({});
  return res.status(201).json({
    success: true,
    coupons,
  });
});

export const deleteCoupon = TryCatch(async (req: Request, res, next) => {
  const {id} = req.params;
  const coupon = await Coupon.findById(id);
  if(!coupon) return next(new ErrorHandler("Invalid Id" , 404));
  coupon.deleteOne();
  return res.status(201).json({
    success: true,
    message:`Coupon ${coupon.code} Deleted Successfully`,
  });
});


