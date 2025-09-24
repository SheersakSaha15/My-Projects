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
    let selfMailOptions = {
        from: process.env.RECEIPENT_EMAIL,
        to: process.env.RECEIPENT_EMAIL,
        subject: `New message from ${name}`,
        text: `${message}\n\nFrom: ${name}\nEmail: ${email}\nDate of Birth: ${dob}`
    };
    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(selfMailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});