// index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// serve up production assets
app.use(express.static(path.join(__dirname, 'build')));

// // Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Middleware
// app.use(cors());
const corsOptions = {
  origin: process.env.PORT // Replace with your allowed origin
};

app.use(cors(corsOptions));

app.use(express.json());

// Connect to MongoDB (using the cloud-based MongoDB connection URL)
const dbURI = process.env.MONGO_DB_URL

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Use API routes
app.use('/api', require('./server/routes/api'));

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
