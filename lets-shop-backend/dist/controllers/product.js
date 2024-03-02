import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
export const newProduct = productTryCatch(async (req, res, next) => {
    const { name, stock, category, price } = req.body;
    const photo = req.file;
    if (!photo)
        return next(new ErrorHandler("Please Add Photo", 400));
    if (!name || !stock || !category || !price) {
        rm(photo.path, () => {
            console.log("photo deleted");
        });
        return next(new ErrorHandler("please enter all fields", 400));
    }
    await Product.create({
        name,
        stock,
        category: category.toLowerCase(),
        price,
        photo: photo?.path,
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
    });
});
