const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');

// Create a new product
router.post('/create', async (req, res) => {
  const { name, description, location, ownerId } = req.body;

  try {
    const product = await Product.create({ name, description, location, ownerId });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Request a product
router.post('/request', async (req, res) => {
  const { productId, userId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.requests.push({ userId });
    await product.save();

    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
