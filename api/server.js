const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectToDb } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectToDb();

app.use('/products', productRoutes); // Updated route path
app.use('/user', userRoutes); // Updated route path

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
