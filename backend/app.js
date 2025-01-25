// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const chatRoutes = require('./routes/chat');

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/products', productRoutes); // Product routes
app.use('/api/chat', chatRoutes); // Chat routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
