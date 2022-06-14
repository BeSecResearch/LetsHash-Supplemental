var login = document.getElementById('login-button');
var validated = document.getElementById('login-validation');

login.addEventListener('click', function() {

    var validate = length();

    if(validate !== true) {
        validated.innerHTML = "Password is not valid!" + "<br>" + "Please make sure your password adheres to the policy.";
    }
    else {
        validated.innerHTML = "Password is valid!";
    }
});


