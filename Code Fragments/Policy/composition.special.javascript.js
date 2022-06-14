function composition() {
    var password = document.getElementById('password');
    // at least one special character
    var special = /[^A-Za-z0-9]/;
    return special.test(password.value);
}



