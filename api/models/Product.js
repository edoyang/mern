// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  productImage: String,
  category: String,
  tags: [String],
  isActive: Boolean,
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;
