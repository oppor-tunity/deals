//Deals.js

const express = require('express');
const router = express.Router();
const Deal = require('../models/Deal');

// Get all deals
router.get('/deals', async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Create a deal
router.post('/deals', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newDeal = new Deal({ title, description });
    const deal = await newDeal.save();
    res.json(deal);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;