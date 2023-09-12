const mysql = require('mysql');
const { dbConfig } = require('../config/config');

class CustomerController {
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  async getAllCustomers() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM customer';

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

  // Add other methods for customer-related operations if needed
}

module.exports = CustomerController;