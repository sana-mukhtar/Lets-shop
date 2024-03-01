import { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import { newProductRequestBody } from "../types/types.js";

export const newProduct = TryCatch(async (req:Request<{},{},{}> , res , next)=>{

});
