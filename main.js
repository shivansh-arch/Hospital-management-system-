document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Your message has been sent successfully!");
});
// JavaScript for the hospital website functionality

// Toggle mobile navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form validation
let sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();

    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (!fullName || !email || !phone || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    clearForm();
}

// Helper function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Clear form after submission
function clearForm() {
    document.getElementById('full-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
