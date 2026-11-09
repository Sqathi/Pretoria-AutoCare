// Pretoria AutoCare - Enquiry Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    // Only run validation on pages containing the enquiry form
    if (!enquiryForm) {
        return;
    }

    const formMessage = document.getElementById("formMessage");

    enquiryForm.addEventListener("submit", function (event) {

        // Stop submission until validation is complete
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous messages
        formMessage.textContent = "";
        formMessage.style.color = "red";

        // Check for empty fields
        if (!name || !email || !phone || !message) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        // Check South African phone number format
        const phonePattern = /^(0\d{9}|\+27\d{9})$/;

        if (!phonePattern.test(phone)) {
            formMessage.textContent =
                "Please enter a valid South African phone number.";
            return;
        }

        // Check message length
        if (message.length < 10) {
            formMessage.textContent =
                "Your enquiry must contain at least 10 characters.";
            return;
        }

        // Validation successful
        formMessage.style.color = "green";
        formMessage.textContent =
            "Your details are valid! This demonstration form is not yet connected to an email service.";

        enquiryForm.reset();

    });

});