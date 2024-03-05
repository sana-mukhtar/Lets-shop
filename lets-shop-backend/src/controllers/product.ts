import { NextFunction, Request, Response } from "express";
import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import { newProductRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const newProduct = productTryCatch(
  async (
    req: Request<{}, {}, newProductRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, stock, category, price } = req.body;
    const photo = req.file;
    if (!photo) return next(new ErrorHandler("Please Add Photo", 400));
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
  }
);

export const getLatestProducts = productTryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({createdAt : -1}).limit(5);
  return res.status(201).json({
    success: true,
    products,
  });
});


export const getAllCategories = productTryCatch(async (req, res, next) => {
  const categories = await Product.distinct("category");
  return res.status(201).json({
    success: true,
    categories,
  });
});