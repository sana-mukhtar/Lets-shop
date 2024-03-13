import express from "express";
import { allOrders, myOrders, newOrder, singleOrderDetails } from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// /api/v1/order/new
app.post("/new", newOrder);

//  /api/v1/order/myorders
app.get("/myorders" ,  myOrders);

//  /api/v1/order/allorders
app.get("/allorders",adminOnly , allOrders);


app.route("/:id").get(singleOrderDetails)

//  /api/v1/user/dynamicid
// app.get("/:id", getUser);

//delete user route
// app.delete("/:id",adminOnly, deleteUser);

export default app;
