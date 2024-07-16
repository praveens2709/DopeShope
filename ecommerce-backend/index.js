const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');
const config = require('./src/config/config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes);

mongoose.connect(config.mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
    
module.exports = app;