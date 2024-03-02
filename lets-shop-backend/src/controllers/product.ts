import { NextFunction, Request, Response } from "express";
import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import { newProductRequestBody } from "../types/types.js";

export const newProduct = productTryCatch(
  async (req: Request<{}, {}, newProductRequestBody>, res: Response, next: NextFunction) => {

    const {name , stock , category , price}= req.body;
    const photo = req.file;

    await Product.create({
      name,
      stock,
      category:category.toLowerCase(),
      price,
      photo : photo?.path,
    });

    return res.status(201).json({
        success:true,
        message:"Product Created Successfully",
    })
  }
);
