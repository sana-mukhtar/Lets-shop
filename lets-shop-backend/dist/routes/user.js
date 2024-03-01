import express from "express";
import { getAllUsers, getUser, newUser } from "../controllers/user.js";
const app = express.Router();
// /api/v1/user/new
app.post("/new", newUser);
//  /api/v1/user/all
app.get("/all", getAllUsers);
//  /api/v1/user/dynamicid
app.get("/:id", getUser);
export default app;
