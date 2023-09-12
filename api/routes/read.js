// Import the required modules
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController'); // Import your controller
const CustomerController = require('../controllers/CustomerController'); // Import your customer controller
const UserController = require('../controllers/UserController'); // Import your user controller

const productController = new ProductController();
const customerController = new CustomerController();
const userController = new UserController();

// Define a root endpoint
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API!' });
});

// Define the '/products' endpoint to retrieve all products
router.get('/products', async (req, res) => {
  try {
    const products = await productController.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define the '/customers' endpoint to retrieve all customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await customerController.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define the '/users' endpoint to retrieve all users
router.get('/users', async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add more endpoints as needed

module.exports = router;
