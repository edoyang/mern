// config/db.js
const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Exit the application on connection failure
  }
};

module.exports = { connectToDb }; // Export the function
