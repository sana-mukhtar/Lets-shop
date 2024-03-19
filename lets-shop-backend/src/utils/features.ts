import mongoose, { Document } from "mongoose";
import { invalidateCacheProps, orderItemType } from "../types/types.js";
import { myCache } from "../app.js";
import { Product } from "../models/products.js";
import { Order } from "../models/order.js";

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
  userId,
  orderId,
  productId,
}: invalidateCacheProps) => {
  if (product) {
    const productKeys: string[] = [
      "categories",
      "latest-products",
      "all-products",
    ];
    if (typeof productId === "string") productKeys.push(`product-${productId}`);
    if (typeof productId === "object")
      productId.forEach((i) => productKeys.push(`product-${i}`));

    myCache.del(productKeys);
  }
  if (order) {
    const orderKeys: string[] = [
      "all-orders",
      `my-orders-${userId}`,
      `order-${orderId}`,
    ];
    myCache.del(orderKeys);
  }
  if (admin) {
    myCache.del(["admin-stats" , "admin-pie-charts" ,"admin-bar-charts" , "admin-line-charts"])
  }
};

export const reduceStock = async (orderItems: orderItemType[]) => {
  for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    if (!product) throw new Error("Product Not Found!");
    product.stock -= order.quantity;
    await product.save();
  }
};

export const calculatePercentage = (thisMonth: number, lastMonth: number) => {
  if (lastMonth === 0) return thisMonth * 100;
  const percent = (thisMonth / lastMonth) * 100;
  return Number(percent.toFixed(0));
};

interface myDocument extends Document {
  createdAt: Date;
  discount?: number;
  total?: number;
}
type func1props = { length: number; docArr: myDocument[]; property?: "discount" | "total" };

export const getChartData = ({ length, docArr, property }: func1props) => {
  const today = new Date();
  const data: number[] = new Array(length).fill(0);

  docArr.forEach((i) => {
    const creationDate = i.createdAt;
    const monthDiff = (today.getMonth() - creationDate.getMonth() + 12) % 12;
    if (monthDiff < length) {
      if(property) data[length - monthDiff - 1] += i[property]!;
      else{
        data[length - monthDiff - 1] += 1;
      }
      
    }
  });

  return data;
};
