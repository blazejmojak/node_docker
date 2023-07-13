const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.get('/test', (req, res) => {
  res.json({ message: 'This is a test 6' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Main page' });
  });  

// From .env file PORT=3001 in this case
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});