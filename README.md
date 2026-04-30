# 🚀 Personal Developer Portfolio

Hi there! 👋 Welcome to the repository for my personal developer portfolio. 

This project is a fully responsive, full-stack website designed to showcase my projects, skills, and experience as a developer. It features a custom-built UI, dark-mode optimized assets, and a fully functional serverless backend for handling contact forms and database entries.

### 🌐 Live Demo
Check out the live site here: **https://my-projects-gold-sigma.vercel.app/**

---

## ✨ Key Features

* **Responsive Design:** Custom CSS ensuring a seamless experience across mobile, tablet, and desktop screens.
* **Serverless Backend:** API routes structured specifically for Vercel Serverless Functions (`/api/emailback` and `/api/users`).
* **Active Contact Form:** Integrated with `nodemailer` to instantly route form submissions directly to my personal inbox.
* **Database Integration:** Connected to a cloud database to securely log user interaction data.
* **Secure Configuration:** Environment variables strictly managed and hidden from public tracking to protect sensitive API keys and database credentials.

---

## 🛠️ Tech Stack

**Frontend:**
* HTML5 / CSS3
* Vanilla JavaScript (ES6+)
* Fetch API for asynchronous form submission

**Backend & Deployment:**
* Node.js & Express.js
* Nodemailer (Email routing)
* MySQL / Cloud Database Connection (`mysql` pool)
* Hosted on **Vercel**

---

## 💻 Local Installation & Setup

If you want to run this project locally on your own machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SheersakSaha15/My-Projects.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd My-Projects
   ```

3. **Install the dependencies:**
   *(Note: `node_modules` is intentionally ignored in this repository to keep it lightweight!)*
   ```bash
   npm install
   ```

4. **Set up your Environment Variables:**
   Create a `.env` file in the root directory and add the following keys (replace with your own actual credentials):
   ```env
   PORT=5000
   
   # Email Routing
   GMAIL_USER=your_email@gmail.com
   GMAIL_PASS=your_app_password
   RECEIPENT_EMAIL=your_receiving_email@gmail.com

   # Database Credentials
   DB_HOST=your_cloud_database_url
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   DB_PORT=3306

5. **Run the local server:**
   ```bash
   node api/emailback.js
   ```
   *(The server will start on `http://localhost:5000`)*

---

## 🌱 What I Learned

Building this portfolio was a massive, hands-on learning experience. Rather than just relying on website builders, I built this from the ground up to truly understand how the web works. Throughout this project, I gained practical experience with:

* **Full-Stack Development:** Bridging the gap between a frontend user interface and a custom backend server using vanilla JavaScript and Node.js.
* **Responsive Web Design:** Building a user-friendly layout from scratch using HTML and CSS that adapts seamlessly to both mobile devices and desktop monitors.
* **Email Automation:** Integrating the `nodemailer` package to capture frontend form submissions and securely route them directly to my personal email inbox.
* **Database Management:** Establishing a secure connection to a cloud database and writing SQL queries to successfully log and store user interaction data.
* **Serverless Architecture:** Transitioning a traditional local Express server into Vercel-compatible Serverless Functions, which required a deep dive into API routing and file structure.
* **Security & Environment Variables:** Protecting sensitive information like database passwords and email credentials using `.env` files, and strictly enforcing `.gitignore` rules to keep them off the public internet.
* **Version Control (Git):** Real-world experience navigating Git, resolving branch merges, untracking accidentally committed files safely, and surviving the infamous Vim text editor trap!

---
*Designed and engineered by Sheersak Saha.*
