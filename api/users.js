require('dotenv').config();
const express = require('express');
const pool = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/api/users', (req, res) => {
    const { name, dob, email, message } = req.body;
    const sql = 'INSERT INTO user_details (name, dob, email, message) VALUES (?, ?, ?, ?)';
    pool.query(sql, [name, dob, email, message], (error, results) => {
        if (error) {
            console.error('Error inserting user', error)
            return res.status(500).json({ success: false, message: 'Failed to add user' })
        }
        res.status(201).json({ success: true, message: 'User added successfully', userId: results.insertId });
    })
});
module.exports = app;