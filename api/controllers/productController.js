// controllers/productController.js
const Product = require('../models/Product');

// Function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
};

// Function to add a new product
exports.addProduct = async (req, res) => {
  // Log the incoming request body
  console.log(req.body);

  try {
      const {
          name,
          price,
          description,
          isActive,
          category,
          productImage
      } = req.body;

      // Validate required fields
      if (!name) {
          return res.status(400).json({ message: 'Name is required' });
      }
      if (price === undefined || price === null) {
          return res.status(400).json({ message: 'Price is required' });
      }
      if (!description) {
          return res.status(400).json({ message: 'Description is required' });
      }

      const productData = {
          name,
          price,
          description,
          isActive,
          category,
          productImage  // base64 encoded image
      };

      const newProduct = new Product(productData);
      await newProduct.save();
      res.status(201).json(newProduct);
  } catch (err) {
      console.error('Error saving product:', err);
      res.status(500).json({ message: 'Error adding product', error: err });
  }
};


// Function to update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err });
  }
};

// Function to get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err });
  }
};

// Function to delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err });
  }
};
