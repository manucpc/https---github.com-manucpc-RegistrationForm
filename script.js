document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phonenum = document.getElementById("phonenum").value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    
    const errormessage = document.getElementById("error-message");

    if (!email.match(emailRegex)) {
        window.alert("Invalid email address.");
        return;
    }

    if (name.length < 4) {
        window.alert("Username must be at least 4 characters long.");
        return;
    }

    if (password.length < 8) {
        window.alert("Password must be at least 8 characters long.");
        return;
    }

    if (phonenum.length !== 10) {
        window.alert("Phone number must be 10 digits long.");
        return;
    }

    errormessage.textContent = "Registration successful!";
    window.alert("Registration successful!");
    window.location.href='r1.html';
});
