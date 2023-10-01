const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/get', productController.getAllProducts);

// Add a new product
router.post('/post', productController.addProduct);

// Update a product by ID
router.put('/put/:id', productController.updateProduct);

// Get a single product by ID
router.get('/get/:id', productController.getProductById);

// Delete a product by ID
router.delete('/delete/:id', productController.deleteProductById);

module.exports = router;
