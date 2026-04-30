const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const dobInput = document.getElementById('dob');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        dob: dobInput.value,
        message: messageInput.value
    };

    try {
        const response = await fetch('/api/emailback.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert('Email sent successfully!');
            form.reset();
        } else {
            alert('Failed to send email. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please check the console for details.');
    }
});