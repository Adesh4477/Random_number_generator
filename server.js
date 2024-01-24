import express  from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join("/home/adesh/Desktop/random number generator", 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join("/home/adesh/Desktop/random number generator", 'public', 'index.html'));
});

// API endpoint to generate a random number
app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Change the range as needed
  res.json({ number: randomNumber });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});