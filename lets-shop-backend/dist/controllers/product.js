import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
//new product
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
//latest product
export const getLatestProducts = productTryCatch(async (req, res, next) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(201).json({
        success: true,
        products,
    });
});
//get all categories
export const getAllCategories = productTryCatch(async (req, res, next) => {
    const categories = await Product.distinct("category");
    return res.status(201).json({
        success: true,
        categories,
    });
});
//get admin products
export const getAdminProducts = productTryCatch(async (req, res, next) => {
    const products = await Product.find({});
    return res.status(201).json({
        success: true,
        products,
    });
});
//get product details
export const getSingleProduct = productTryCatch(async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.status(201).json({
        success: true,
        product,
    });
});
//update product
export const updateProduct = productTryCatch(async (req, res, next) => {
    const { name, stock, category, price } = req.body;
    const photo = req.file;
    const product = await Product.findById(req.params.id);
    if (!product)
        return next(new ErrorHandler("Product Not Found", 404));
    if (photo) {
        rm(product.photo, () => {
            console.log("Photo Updated");
        });
        product.photo = photo.path;
    }
    if (name)
        product.name = name;
    if (price)
        product.price = price;
    if (stock)
        product.stock = stock;
    if (category)
        product.category = category;
    await product.save();
    return res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
    });
});
//delete product
export const deleteProduct = productTryCatch(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product)
        return next(new ErrorHandler("Product Not Found", 404));
    rm(product.photo, () => {
        console.log("Product photo deleted");
    });
    await product.deleteOne();
    return res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
    });
});
export const searchAllProducts = productTryCatch(async (req, res, next) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(201).json({
        success: true,
        products,
    });
});
