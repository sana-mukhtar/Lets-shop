import express from "express";
import { allOrders, deleteOrder, myOrders, newOrder, processOrder, singleOrderDetails } from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// /api/v1/order/new
app.post("/new", newOrder);

//  /api/v1/order/myorders
app.get("/myorders" ,  myOrders);

//  /api/v1/order/allorders
app.get("/allorders",adminOnly , allOrders);


app.route("/:id").get(singleOrderDetails).put(adminOnly,processOrder).delete(adminOnly ,deleteOrder);



export default app;
