import express from "express";
import {
  addProduct,
  getProductViaId,
} from "../controllers/productController.js";

const router = express.Router();

// Get Product via id
router.get("/:id", getProductViaId);

// Add Product
router.post("/", addProduct);

export default router;
