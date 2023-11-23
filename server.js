//server.js

require('dotenv').config(); // Load environment variables from .env file

// Log the value of MONGODB_URI
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json())
const port = 3001;

// Use the cors middleware
app.use(cors());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
const mongoDataApiKey = process.env.MONGODB_DATA_API_KEY;
mongoose.connect(mongoURI,
   {}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed: "));
db.once("open", function () {
    console.log("Connected to the database successfully")
});


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

// Add logging for all incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});


// Handle POST requests to /api/add-deal
app.post('/api/add-deal', async (req, res) => {
  try {
    // Assuming 'req.body' contains the deal information
    const newDeal = new Deal(req.body);
    const savedDeal = await newDeal.save();

    res.status(201).json(savedDeal); // 201 Created for successful creation
  } catch (error) {
    console.error('Error submitting deal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Handle GET requests to /api/deals
app.get('/api/deals', async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch-all route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
