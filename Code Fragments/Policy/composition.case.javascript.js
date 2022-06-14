function composition() {
    var password = document.getElementById('password');
    //at least one lowercase and one uppercase letter
    var upper_lower = /(?=.*[a-z])(?=.*[A-Z])/;
    return upper_lower.test(password.value);
}



