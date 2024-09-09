export const getProductViaId = (req, res) => {
  const productId = req?.params?.id;
  if (!productId) {
    return res.status(404).send("Product id is required");
  }
  res.send(`Product id is ${productId}`);
};

export const addProduct = (req, res) => {
  const product = req?.body;
  if (!product) {
    return res.status(404).send("Product details are required");
  }

  res.send(`Product details are ${JSON.stringify(product)}`);
};
