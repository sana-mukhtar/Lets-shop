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
app.use("/api/v1/user", userRoutes);
app.use((err, req, res, next) => {
    return res.status(400).json({
        success: true,
        message: "some error"
    });
});
app.listen(port, () => {
    console.log(`Express is running on ${port}`);
});
