import express from "express";

const router = express.Router();

// Get Product via id
router.get("/:id", (req, res) => {
  const productId = req?.params?.id;
  if (!productId) {
    return res.status(404).send("Product id is required");
  }
  res.send(`Product id is ${productId}`);
});

// Add Product
router.post("/", (req, res) => {
  const product = req?.body;
  if (!product) {
    return res.status(404).send("Product details are required");
  }

  res.send(`Product details are ${JSON.stringify(product)}`);
});

export default router;
