import { myCache } from "../app.js";
import { TryCatch, orderTryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { newOrderRequestBody } from "../types/types.js";
import { invalidateCache, reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";

export const newOrder = orderTryCatch(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    user,
    subtotal,
    tax,
    discount,
    total,
    shippingCharges,
  } = req.body;

  if (!shippingInfo || !orderItems || !user || !subtotal || !tax || !total)
    return next(new ErrorHandler("Please fill all the required fields", 400));

  await Order.create({
    shippingInfo,
    orderItems,
    user,
    subtotal,
    tax,
    discount,
    total,
    shippingCharges,
  });

  await reduceStock(orderItems);
  await invalidateCache({ product: true, order: true, admin: true });

  return res.status(201).json({
    success: true,
    message: "Order Placed Successfully",
  });
});



//My Orders
export const myOrders = orderTryCatch(async (req, res, next) => {
  const { id: user } = req.query;
  const key = `my-orders-${user}`;
  let orders = [];

  if (myCache.has(key)) orders = JSON.parse(myCache.get(key) as string);
  else {
    orders = await Order.find({ user });
    myCache.set(key, JSON.stringify(orders));
  }

  invalidateCache({
    product: true,
    order: true,
    admin: true,
  });

  return res.status(201).json({
    success: true,
    orders,
  });
});
