function length() {
    var password = document.getElementById('password');
    // at least eight, at most 64 characters
    var length = /^.{8,64}$/;
    return length.test(password.value);
}


