// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("LpfCtK88Sr1gJ9kTg"); // Replace with your API Public Key
})();

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);
    const emailParams = {
        from_email: formData.get('email'), // Sender's email
        message: formData.get('message')  // Message content
    };

    // Send the email using EmailJS
    emailjs.send('service_dripa2a', 'template_dbu7q6h', emailParams)
        .then(response => {
            alert('Message sent successfully!'); // Success feedback
            contactForm.reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error sending message:', error); // Log error details
            alert('Failed to send message. Please try again.'); // Error feedback
        });
});
