const express = require('express');
const router = express.Router();
// const port = 4000; // Change the port as needed
const productController = require('../controller/products');

// CREATE -> POST
router.post('/product', productController.createProduct);

// READ -> GET
router.get('/products', productController.getAllProducts);

module.exports = router;