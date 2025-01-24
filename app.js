const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Game!');
});

app.get('/game', (req, res) => {
  res.send('Game is in progress...');
});

app.listen(port, () => {
  console.log(`Game app listening at http://localhost:${port}`);
});

module.exports = app; // Export the app instance for testing
