require('dotenv').config(); // Load environment variables from .env file

// Log the value of MONGODB_URI
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3001;

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
const mongoDataApiKey = process.env.MONGODB_DATA_API_KEY;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
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
app.post('/api/submit-deal', async (req, res) => {
  try {
    const response = await axios.post(
      'https://eu-central-1.aws.data.mongodb-api.com/app/data-oiiap/endpoint/data/v1/dealscollection',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': mongoDataApiKey,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error submitting deal:', error);
    console.error('Error details:', error.response.data);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
