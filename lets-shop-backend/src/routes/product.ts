import express from "express";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getLatestProducts,
  getSingleProduct,
  newProduct,
  searchAllProducts,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);

app.get("/search", searchAllProducts);

app.get("/latest", getLatestProducts);

app.get("/categories", getAllCategories);

app.get("/admin-products", adminOnly, getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
