require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/api/emailback', async (req, res) => {
    const { name, dob, email, message } = req.body;
    console.log("Checking Email:", process.env.GMAIL_USER ? "Found Email!" : "MISSING EMAIL!");
    console.log("Checking Pass:", process.env.GMAIL_PASS ? "Found Pass!" : "MISSING PASS!");
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
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;