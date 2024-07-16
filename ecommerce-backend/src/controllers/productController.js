// controllers/productController.js

const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

const handleFileUpload = (files) => {
    const uploadedImages = [];
    files.forEach(file => {
        const imagePath = `images/${file.filename}`;
        uploadedImages.push(imagePath);
    });
    return uploadedImages;
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        if (req.files && req.files.length > 0) {
            product.images = handleFileUpload(req.files);
        }
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        if (req.files) {
            req.files.forEach(file => {
                const filePath = path.join(__dirname, '..', 'images', file.filename);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log(`Deleted file: ${filePath}`);
                } else {
                    console.error(`File not found: ${filePath}`);
                }
            });
        }
        res.status(400).json({ message: err.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};
