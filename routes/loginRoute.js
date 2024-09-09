import express from "express";
import { login, registerUser } from "../controllers/loginController.js";

const router = express.Router();

// Login user
router.post("/login", login);

// Register user
router.post("/register", registerUser);

export default router;
