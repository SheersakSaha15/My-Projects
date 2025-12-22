require('dotenv').config();
const pool = require('./db');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/send-email', async (req, res) => {
    const { name, dob, email, message } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
    let mailOptions = {
        from: process.env.RECEIPENT_EMAIL,
        to: email,
        subject: `We received your mail ${name}`,
        text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nSherShah.`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});
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
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});