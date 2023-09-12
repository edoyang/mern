const express = require('express');
const app = express();
const port = 4000; // Change the port as needed
const mysql = require('mysql');
const { dbConfig } = require('./config/config');

// Define a root route handler
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API!' });
  });  

// Import routes
const readRoutes = require('./routes/read');

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use the 'read' routes
app.use('/api', readRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
