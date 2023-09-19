exports.createProduct = (req, res) => {
  const name = req.body.productName;
  const price = req.body.productPrice;
  res.json({
    message: 'Create Product Success',
    data: {
      name: name, 
      price: price,
      description: "ProductDescription",
      tags: "Tags"
    }
  });
}

exports.getAllProducts = (req, res) => {
  res.json({
    message: 'Get All Product Success'
  });
}
