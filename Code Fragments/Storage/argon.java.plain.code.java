import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import de.mkammerer.argon2.Argon2Factory.Argon2Types;
import de.mkammerer.argon2.Argon2Helper;

public static String hashPassword(String password) {
    Argon2 argon2 = Argon2Factory.create(Argon2Types.ARGON2id);		
    // figure out the optimal number of iterations for your system
    // 1000 = The hash call must take at most 1000 ms
    // 65536 = Memory cost
    // 4 = parallelism; decided by the amount of logical processors on your system 
	int iterations = Argon2Helper.findIterations(argon2, 1000, 65536, 4);		
	char[] passwordArray = password.toCharArray();		
	String hash = argon2.hash(iterations, 65536, 4, passwordArray);		
	argon2.wipeArray(passwordArray);		
	return hash;		
}

// Verify that password matches hash:
public static Boolean verifyPassword(String password, String hashed) {
    Argon2 argon2 = Argon2Factory.create(Argon2Types.ARGON2id);
    return argon2.verify(hashed, password);
}