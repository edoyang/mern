const dbConfig = {
  host: 'localhost', // or specify the host address if different
  port: 3306,        // default MySQL port
  user: 'root',       // MySQL user with access to the 'api' database
  password: '',      // Empty password, update if needed
  database: 'api',   // Name of the MySQL database
};

const serverConfig = {
  port: 4000,        // Port on which your Express.js server will run
};

module.exports = { dbConfig, serverConfig };