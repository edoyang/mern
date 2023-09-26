const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/', productController.getAllProducts);

// Add a new product
router.post('/', productController.addProduct);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Delete a product by ID
router.delete('/:id', productController.deleteProductById);

module.exports = router;