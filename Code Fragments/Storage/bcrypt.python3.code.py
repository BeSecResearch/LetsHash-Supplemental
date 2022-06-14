import bcrypt

def hash_password(password):
    # bcrypt.gensalt() takes an argument (in the form of eg (rounds=16))
    # which increases security, but also the cost factor
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return pw_hash


def verify(pw_hash, password):
    return bcrypt.checkpw(password.encode(), pw_hash)


def main():
    pw_hash = hash_password('s3cr3t')
    print(pw_hash)
    print(verify(pw_hash, 's3cr3t'))
    print(verify(pw_hash, 's3cr4t'))
    return None


if __name__ == '__main__':
    main()