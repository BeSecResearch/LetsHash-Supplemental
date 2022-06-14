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



