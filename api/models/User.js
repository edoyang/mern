const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  userRole: { type: String, default: 'customer' },
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema, 'customers');

module.exports = User;
