// models/Product.js

const mongoose = require('mongoose');

// const sizeOptionSchema = new mongoose.Schema({
//     size: { type: String, required: true },
//     stock: { type: Number, required: true },
// });

// const colorOptionSchema = new mongoose.Schema({
//     color: { type: String, required: true },
//     image: { type: String, required: true },
//     imageSize: { type: String },
//     sizes: [sizeOptionSchema],
// });

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: false },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    discount: { type: String, default: '0%' },
    rating: { type: Number, default: 0 },
    numberOfRatings: { type: Number, default: 0 },
    images: [{ type: String }],
    // colorOptions: [colorOptionSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
