import express from "express";
import { allCoupons, applyDiscount, deleteCoupon, newCoupon } from "../controllers/payment.js";
const app = express.Router();

//Route -> /api/v1/payment/coupon/new
app.post("/coupon/new", newCoupon);

app.get("/discount", applyDiscount);

app.get("/coupons/all", allCoupons);

app.delete("/coupon/:id", deleteCoupon);




export default app;
