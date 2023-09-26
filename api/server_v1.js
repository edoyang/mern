const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// Define a Mongoose schema and model for the products
const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productDescription: String,
  stock: Number,
  productImage: String,
  category: String,
  tags: [String],
  isActive: Boolean
});


const Product = mongoose.model('Product', productSchema, 'product');

// Create an endpoint to fetch the products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
});

// Add a new product
app.post('/products', async (req, res) => {
  try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
  } catch (err) {
      res.status(500).json({ message: 'Error adding product', error: err });
  }
});

app.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Error updating product', error: err });
    }
});

// Get a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err });
    }
});

// DELETE a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting product', error: err });
    }
});

// Define a user schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,  // Ensure to hash the password before saving!
    created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('Customer', userSchema, 'customers');

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            password: hashedPassword
        });
        await user.save();
        res.status(201).send({ message: "User registered successfully!" });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ message: "Email already registered." });
        } else {
            res.status(400).send({ message: "Error registering user.", error });
        }
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
