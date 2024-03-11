import { orderTryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { reduceStock } from "../utils/features.js";

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
  reduceStock();
});
