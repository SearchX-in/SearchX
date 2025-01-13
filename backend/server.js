const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const searchRoute = require('./routes/search');
const personalizedRoute = require('./routes/personalized');

const app = express();
const PORT = 5000;

// Database connection
mongoose.connect('mongodb://localhost:27017/SearchXDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

// API routes
app.use('/search', searchRoute);
app.use('/personalized', personalizedRoute);

app.listen(PORT, () => {
  console.log(`SearchX backend running on port ${PORT}`);
});
