const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create inquiries table
    db.run(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        type TEXT NOT NULL,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// Route: Save an inquiry
app.post('/api/contact', (req, res) => {
  const { name, phone, email, type, message } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, Phone, and Email are required.' });
  }

  const query = `INSERT INTO inquiries (name, phone, email, type, message) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [name, phone, email, type, message], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to save inquiry.' });
    }
    res.status(201).json({ success: true, id: this.lastID });
  });
});

// Route: Get all inquiries
app.get('/api/inquiries', (req, res) => {
  db.all(`SELECT * FROM inquiries ORDER BY created_at DESC`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve inquiries.' });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
