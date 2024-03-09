import express from "express";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";

config({
  path: "./.env",
});
// const port = process.env.PORT || 3000;
const port = 3000;
// const mongoUri = process.env.MONGO_URI || "";

connectDB();
export const myCache = new NodeCache();
const app = express();

app.use(express.json()); //middleware=app.use
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API working with /api/v1");
});

//import userRoutes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";

import { Error } from "mongoose";
import { errorMiddleWare } from "./middlewares/error.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/order", orderRoutes);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleWare);

app.listen(port, () => {
  console.log(`Express is running on ${port}`);
});
