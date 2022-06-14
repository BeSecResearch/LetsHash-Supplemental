import org.mindrot.jbcrypt.*;

public static String hashPassword(String password) {
    return BCrypt.hashpw(password, BCrypt.gensalt());
}

// Verify that password matches hash:
public static Boolean verifyPassword(String password, String hashed) {
    return BCrypt.checkpw(password, hashed);
}