// Import the Express library
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port the server will listen on
const PORT = 8000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});