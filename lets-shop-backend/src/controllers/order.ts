import { orderTryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { invalidateCache, reduceStock } from "../utils/features.js";

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
