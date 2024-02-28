function submitForm() {
    // Get values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Construct WhatsApp message URL
    var whatsappMessage = "Hi, I'm " + name + ". My email is " + email + ". My message is: " + message;
    var whatsappURL = "https://wa.me/+9647503435403?text=hello" + encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}
