const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection
const mongoURI = 'mongodb+srv://philipoppor:J39s1wijGkF4fbhQ@cluster0.hq7cyum.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
