require('dotenv').config();
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
        from: email,
        to: process.env.RECEIPENT_EMAIL,
        subject: `New message from ${name}`,
        text: message
    };
    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(process.env.GMAIL_USER);
    console.log(process.env.GMAIL_PASS);
    console.log(process.env.RECEIPENT_EMAIL);
});