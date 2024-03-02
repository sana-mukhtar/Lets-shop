import { productTryCatch } from "../middlewares/error.js";
export const newProduct = productTryCatch(async (req, res, next) => {
    const { name, stock, category, price } = req.body;
});
