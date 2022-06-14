#!/usr/bin/env python3

import pyotp


def generate_second_factor(shared_secret):

    return pyotp.TOTP(shared_secret)


def generate_uri(second_factor, user_mail):

    return second_factor.provisioning_uri(user_mail, issuer_name="Your Secure App")


def main():

    shared_secret = pyotp.random_base32()
    # The shared secret has to be stored alongside the other infos on the user to verify them in the future.
    second_factor = generate_second_factor(shared_secret)
    print(second_factor.verify(second_factor.now()))

    user_mail = "alice@google.com"
    provisioning_uri = generate_uri(second_factor, user_mail)
    # The provisioning uri can be used to generate a QR-code, 
    # which the user can scan using apps like the Google Authenticator
    print(provisioning_uri)
    
    # It might be advisable to have the user verify their account once immediately after 
    # setting up the second factor, to avoid locking them out at a later date


if __name__ == '__main__':
    main()
