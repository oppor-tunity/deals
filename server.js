require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your MongoDB schema and model
const dealSchema = new mongoose.Schema({
  dealLink: String,
  title: String,
  description: String,
  category: String,
  originalPrice: Number,
  dealPrice: Number,
  discountCode: String,
  shippingCost: Number,
  dealType: String,
});

const Deal = mongoose.model('Deal', dealSchema);

// Handle POST requests to /api/deals
app.post('/api/deals', async (req, res) => {
  try {
    const newDeal = new Deal(req.body);
    await newDeal.save();
    res.status(201).send('Deal saved successfully');
  } catch (error) {
    console.error('Error saving deal:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
