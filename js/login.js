// step 1: add event listener on button
document.getElementById("btn_submit").addEventListener("click", function() {
    // step 2: get the email address from emil input section.
    // Always remember to use .value to get text from an input field.
    const emailField = document.getElementById("uere_email");
    const email = emailField.value;

    // Step 3: get password from password field.
    const passwordField = document.getElementById("user_password");
    const password = passwordField.value;
    
    // Do not check password and email on the client side because it is not secure.

    // Step 4: Varify the email and password.

    if(email == "bank@gmail.com" && password == "bank" ) {
        window.location.href = "bank.html";
    }
    else {
        alert("Invalied email or password");
    }

})