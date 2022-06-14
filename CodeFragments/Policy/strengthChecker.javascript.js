var password = document.getElementById('password');

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


