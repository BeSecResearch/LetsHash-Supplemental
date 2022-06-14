import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;

public static String hashPassword(String password) {
    // Argon2PasswordEncoder(int saltLength, int hashLength, int parallelism, int memory, int iterations)
    // Spring Security uses default values that should be adjusted to your system
    Argon2PasswordEncoder encoder = new Argon2PasswordEncoder();
	return encoder.encode(password);
}

// Verify that password matches hash:
public static Boolean verifyPassword(String password, String hashed) {
    Argon2PasswordEncoder encoder = new Argon2PasswordEncoder();
    return encoder.matches(password, hashed);
}