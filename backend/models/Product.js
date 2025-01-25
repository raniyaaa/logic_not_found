// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Owner reference
  location: { type: String }, // Location of the product
  requests: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      requestedAt: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

