function composition() {
    var password = document.getElementById('password');
    //at least one number
    var number = /(?=.*\d)/;
    //at least one lowercase and one uppercase letter
    var upper_lower = /(?=.*[a-z])(?=.*[A-Z])/;
    // at least one special character
    var special = /[^A-Za-z0-9]/;
    return number.test(password.value) && upper_lower.test(password.value) && special.test(password.value);
}

function length() {
    var password = document.getElementById('password');
    // at least eight, at most 64 characters
    var length = /^.{8,64}$/;
    return length.test(password.value);
}

var login = document.getElementById('login-button');
var validated = document.getElementById('login-validation');

login.addEventListener('click', function() {

    console.log(composition());
    console.log(length());

    var validate = composition() && length();

    if(validate !== true) {
        validated.innerHTML = "Password is not valid!" + "<br>" + "Must be between 8 and 64 characters, contain at least one upper- and one lowercase letter, a number and a special character."; 
    }
    else {
        validated.innerHTML = "Password is valid!";
    }
});

var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');
                                                
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
}

password.addEventListener('input', function()
{
var val = password.value;
var result = zxcvbn(val);

// Update the password strength meter
meter.value = result.score;

// Update the text indicator
if(val !== "") {
    text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<br>" + "<span class='feedback'>" + result.feedback.warning + "<br>" + result.feedback.suggestions + "</span>"; 
}
else {
    text.innerHTML = "";
}
});

