import express from "express";
import { newOrder } from "../controllers/order.js";

const app = express.Router();

// /api/v1/order/new
app.post("/new", newOrder);

//  /api/v1/user/all
// app.get("/all", adminOnly ,  getAllUsers);

//  /api/v1/user/dynamicid
// app.get("/:id", getUser);

//delete user route
// app.delete("/:id",adminOnly, deleteUser);

export default app;
