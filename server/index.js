const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const pool = require("./db");
const bodyParser = require('body-parser');
const { Alert } = require("react-bootstrap");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });

// Route for file upload
app.post("/upload", upload.single('photo'), async (req, res) => {
  try {
    const { username, address, ipfs } = req.body;
    const existingAddress = await pool.query("SELECT * FROM signup WHERE address = $1", [address]);
    if (existingAddress.rows.length > 0) {
      return res.status(400).json({ error: "Address already exists" });
    }
    const newData = await pool.query(
      "INSERT INTO signup (username, address, ipfs) VALUES ($1, $2, $3) RETURNING *",
      [username, address, ipfs]
    );
    res.json(newData.rows[0]);
  } catch (error) {
    console.error("Error inserting data:", error.message);
    res.status(500).json({ error: "Server Error" }); // Return JSON error response
  }
});

app.get("/upload", async (req, res) => {
  try {
    const photosData = await pool.query("SELECT * FROM signup");
    res.json(photosData.rows);
  } catch (error) {
    console.error("Error getting photos:", error.message);
    res.status(500).json({ error: "Server Error" }); // Return JSON error response
  }
});

app.post('/wocktan', async (req, res) => {
  const { fullname, email, phone, beaWock, getaWock } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO wocktan (fullname, email, phone, beawock, needawock) VALUES ($1, $2, $3, $4, $5)',
      [fullname, email, phone, beaWock, getaWock]
    );

    res.status(201).json({ message: 'Data inserted successfully' }); // Send JSON response here
    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' }); // Return JSON error response
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
