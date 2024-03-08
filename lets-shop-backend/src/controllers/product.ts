import { NextFunction, Request, Response } from "express";
import { productTryCatch } from "../middlewares/error.js";
import { Product } from "../models/products.js";
import {
  baseQuery,
  newProductRequestBody,
  searchRequestQuery,
} from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
import { faker } from "@faker-js/faker";

//new product
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
export const getSingleProduct = productTryCatch(
  async (req: Request, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.status(201).json({
      success: true,
      product,
    });
  }
);

//update product
export const updateProduct = productTryCatch(
  async (req: Request, res, next) => {
    const { name, stock, category, price } = req.body;
    const photo = req.file;
    const product = await Product.findById(req.params.id);

    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    if (photo) {
      rm(product.photo!, () => {
        console.log("Photo Updated");
      });
      product.photo = photo.path;
    }

    if (name) product.name = name;
    if (price) product.price = price;
    if (stock) product.stock = stock;
    if (category) product.category = category;

    await product.save();
    return res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
    });
  }
);

//delete product
export const deleteProduct = productTryCatch(
  async (req: Request, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product Not Found", 404));

    rm(product.photo!, () => {
      console.log("Product photo deleted");
    });
    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  }
);

//search product
export const searchProducts = productTryCatch(
  async (req: Request<{}, {}, {}, searchRequestQuery>, res, next) => {
    const { search, sort, category, price } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(process.env.PRODUCT_PER_PAGE) || 8;
    const skip = (page - 1) * limit;

    const baseQuery: baseQuery = {};

    if (search)
      baseQuery.name = {
        $regex: search,
        $options: "i",
      };

    if (price)
      baseQuery.price = {
        $lte: Number(price),
      };

    if (category) baseQuery.category = category;

    const productPromise = Product.find(baseQuery)
      .sort(sort && { price: sort === "asc" ? 1 : -1 })
      .limit(limit)
      .skip(skip);

    const [products, filteredProduct] = await Promise.all([
      productPromise,
      Product.find(baseQuery),
    ]);
    const total_page = Math.ceil(filteredProduct.length / limit);
    return res.status(201).json({
      success: true,
      products,
      total_page,
    });
  }
);

//generate random products function
const generateRandomProducts = async (count: number = 10) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      name: faker.commerce.productName(),
      photo: "uploads\\2becedea-55cb-4e9d-a377-a739b6a1d596.jpg",
      price: faker.commerce.price({ min: 1000, max: 80000, dec: 0 }),
      stock: faker.commerce.price({ min: 0, max: 100, dec: 0 }),
      category: faker.commerce.department(),
      createdAt: new Date(faker.date.past()),
      updatedAt: new Date(faker.date.recent()),
      __v: 0,
    };
  }
};
