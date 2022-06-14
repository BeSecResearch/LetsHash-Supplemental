import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public static String hashPassword(String password) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	return (encoder.encode(password);
}

// Verify that password matches hash:
public static Boolean verifyPassword(String password, String hashed) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    return(encoder.matches(password, hashed));
}