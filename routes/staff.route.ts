import express from "express";
import {
  createStaff,
  deleteStaff,
  getAllStaff,
  updateStaff,
} from "../controllers/staff.controller";

export const staffRoute = express.Router();

staffRoute.get("/", getAllStaff);
staffRoute.post("/create", createStaff);
staffRoute.put("/update/:id", updateStaff);
staffRoute.delete("/delete/:id", deleteStaff);
