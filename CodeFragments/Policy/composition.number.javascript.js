function composition() {
    var password = document.getElementById('password');
    //at least one number
    var number = /(?=.*\d)/;
    return number.test(password.value);
}



