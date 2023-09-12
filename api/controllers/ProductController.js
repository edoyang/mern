// Import the required modules and configurations
const mysql = require('mysql');
const { dbConfig } = require('../config/config'); // Adjust the path if necessary

class ProductController {
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  async getAllProducts() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products'; // Modify the query to select all data

      this.pool.query(query, (error, results) => {
        if (error) {
          console.error('Error executing SQL query:', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Other methods for handling product-related operations can be added here
}

module.exports = ProductController;
