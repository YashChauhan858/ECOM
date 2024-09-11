import { Request, Response } from "express";

export const getProductViaId = (req: Request, res: Response) => {
  const productId = req?.params["id"];
  if (!productId) {
    return res.status(404).send("Product id is required");
  }
  return res.send(`Product id is ${productId}`);
};

export const addProduct = (req: Request, res: Response) => {
  const product = req?.body;
  if (!product) {
    return res.status(404).send("Product details are required");
  }

  return res.send(`Product details are ${JSON.stringify(product)}`);
};
