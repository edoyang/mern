const mysql = require('mysql');
const { dbConfig } = require('../config/config');

class UserController {
  constructor() {
    this.pool = mysql.createPool(dbConfig);
  }

  async getAllUsers() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM user';

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

  // Add other methods for user-related operations if needed
}

module.exports = UserController;