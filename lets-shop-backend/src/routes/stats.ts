import express from "express";
import { getDashboardStats } from "../controllers/stats.js";

const app = express.Router();

//routes -> /api/v1/dashboard
app.get("/stats" , getDashboardStats);

app.get("/pie");

app.get("/bar");

app.get("/line");

export default app;