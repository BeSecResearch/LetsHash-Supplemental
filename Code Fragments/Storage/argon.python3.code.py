from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

def hash_password(password):
    ph = PasswordHasher()
    pw_hash = ph.hash(password)
    return pw_hash


def verify(pw_hash, password):
    ph = PasswordHasher()
    try:
        return ph.verify(pw_hash, password)
    except VerifyMismatchError:
        return False


def main():
    pw_hash = hash_password('s3cr3t')
    print(pw_hash)
    print(verify(pw_hash, 's3cr3t'))
    print(verify(pw_hash, 's3cr4t'))
    return None


if __name__ == '__main__':
    main()