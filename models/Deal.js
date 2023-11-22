const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  dealLink: { type: String, required: true },
  originalPrice: { type: String, required: true },
  dealPrice: { type: String, required: true },
  discountCode: { type: String },
  shippingCost: { type: String },
  dealType: { type: String, required: true },
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = Deal;
