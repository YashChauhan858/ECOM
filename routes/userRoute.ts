import express from "express";
import {
  addUser,
  getUsersViaId,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// Route for getting user details via id
router.get("/:id", getUsersViaId);

// Route for posting user details
router.post("/", addUser);

// Route for updating user details via id
router.put("/:id", updateUser);

export default router;
