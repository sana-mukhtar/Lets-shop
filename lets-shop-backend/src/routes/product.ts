import express from "express";
import { getAdminProducts, getAllCategories, getLatestProducts, newProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";


const app = express.Router();

app.post("/new" , adminOnly, singleUpload, newProduct);

app.get("/latest" , getLatestProducts);

app.get("/categories", getAllCategories);

app.get("/admin-products", getAdminProducts);



export default app;
