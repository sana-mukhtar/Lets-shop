import express from "express";
import { allCoupons, applyDiscount, deleteCoupon, newCoupon } from "../controllers/payment.js";
import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();

//Route -> /api/v1/payment/coupon/new
app.post("/coupon/new",adminOnly, newCoupon);

app.get("/discount", applyDiscount);

app.get("/coupons/all",adminOnly, allCoupons);

app.delete("/coupon/:id",adminOnly, deleteCoupon);




export default app;
