import mongoose from "mongoose";
import { invalidateCacheProps, orderItemType } from "../types/types.js";
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

export const invalidateCache = async ({
  product,
  order,
  admin,
}: invalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
      "categories",
      "latest-products",
      "all-products",
    ];
    
    const products = await Product.find({}).select("_id");
    products.forEach(i =>{
      productKeys.push(`product-${i._id}`);
    })
    myCache.del(productKeys);
  }
  if (order) {
  }
  if (admin) {
  }
};

export const reduceStock = async(orderItems : orderItemType[])=>{
  for(let i = 0 ; i<orderItems.length ; i++){
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    if(!product) throw new Error("Product Not Found!");
    product.stock -= order.quantity;
    await product.save();
  }

}