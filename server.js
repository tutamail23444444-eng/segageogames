const express = require('express');
const path = require('path');
const app = express();

// Set cache control headers to prevent caching issues in Replit iframe
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve static files from the root directory
app.use(express.static('.', {
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

// Handle 404s by serving index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 SEGAGEO GAMES server running on http://0.0.0.0:${PORT}`);
  console.log(`📱 Games available at: http://0.0.0.0:${PORT}`);
});