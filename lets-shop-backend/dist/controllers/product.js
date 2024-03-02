import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
export const newProduct = productTryCatch(async (req, res, next) => {
    const { name, stock, category, price } = req.body;
    const photo = req.file;
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
