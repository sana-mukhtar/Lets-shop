import express from "express";
import { connectDB } from "./utils/features.js";
const port = 3000;
connectDB();
const app = express();
app.use(express.json()); //middleware=app.use
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
//import userRoutes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import { errorMiddleWare } from "./middlewares/error.js";
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use(errorMiddleWare);
app.listen(port, () => {
    console.log(`Express is running on ${port}`);
});
