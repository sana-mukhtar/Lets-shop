import { TryCatch } from "../middlewares/error.js";
import { newOrderRequestBody } from "../types/types.js";

export const newOrder = TryCatch(
  async (req: Request<{}, {}, newOrderRequestBody>, res, next) => {}
);
