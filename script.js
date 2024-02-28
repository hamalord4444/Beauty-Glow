// JavaScript code to handle the WhatsApp button click event
document.addEventListener("DOMContentLoaded", function() {
    // Get the WhatsApp button element
    var whatsappButton = document.querySelector(".whatsapp-button");

    // Add a click event listener to the WhatsApp button
    whatsappButton.addEventListener("click", function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Replace the phone number with your desired WhatsApp number
        var phoneNumber = "1234567890";

        // Open a new window with the WhatsApp chat link
        window.open("https://api.whatsapp.com/send?phone=" + phoneNumber, "_blank");
    });
});
