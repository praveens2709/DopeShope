require('dotenv').config();

const config = {
    port: process.env.PORT || 8000,
    mongoURI: process.env.MONGO_URI,
};

module.exports = config;
