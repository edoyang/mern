// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productDescription: String,
  stock: Number,
  productImage: String,
  category: String,
  tags: [String],
  isActive: Boolean,
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;
