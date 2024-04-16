import express from "express";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";

config({
  path: "./.env",
});
//const port = process.env.PORT || 4000;
const port = 4000;
// const mongoUri = process.env.MONGO_URI || "";

const Stripe_key = process.env.STRIPE_KEY || "";

connectDB();

export const stripe = new Stripe(Stripe_key);
export const myCache = new NodeCache();
const app = express();

app.use(express.json()); //middleware=app.use
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

//import userRoutes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";
import statsRoutes from "./routes/stats.js";

import { errorMiddleWare } from "./middlewares/error.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/dashboard", statsRoutes);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleWare);

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
