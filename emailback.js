const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sheersak.1506@gmail.com',
            pass: 'Sheersak@15062007'
        }
    });
    let mailOptions = {
        from: email,
        to: 'sheersak.1506@gmail.com',
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
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});