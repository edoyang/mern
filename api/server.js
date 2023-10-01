const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectToDb } = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Database connection
connectToDb();

// Routes
app.use('/products', productRoutes);
app.use('/user', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
