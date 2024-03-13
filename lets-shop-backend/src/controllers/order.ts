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

export const myOrders = orderTryCatch(async (req, res, next) => {
  const order = await Order.find();

  invalidateCache({
    product: true,
    order: true,
    admin: true,
  });

  return res.status(201).json({
    success: true,
    order,
  });
});
