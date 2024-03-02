import { NextFunction, Request, Response } from "express";
import { TryCatch, productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import { newProductRequestBody } from "../types/types.js";

export const newProduct = productTryCatch(
  async (req: Request<{}, {}, newProductRequestBody>, res: Response, next: NextFunction) => {

    const {name , stock , category , price}= req.body;
  }
);
