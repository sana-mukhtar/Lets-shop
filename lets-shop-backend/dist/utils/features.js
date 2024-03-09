import mongoose from "mongoose";
import { myCache } from "../app.js";
import { Product } from "../models/products.js";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017", {
        dbName: "Lets_shop",
    })
        .then((c) => console.log(`db connected to ${c.connection.host} `))
        .catch((e) => console.log(e));
};
export const invalidateCache = async ({ product, order, admin, }) => {
    if (product) {
        const productKeys = [
            "categories",
            "latest-products",
            "all-products",
        ];
        const products = await Product.find({}).select("_id");
        products.forEach(i => {
            productKeys.push(`product-${i._id}`);
        });
        myCache.del(productKeys);
    }
    if (order) {
    }
    if (admin) {
    }
};
