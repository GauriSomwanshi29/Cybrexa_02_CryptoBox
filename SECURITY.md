# Security Policy

## Supported Versions

The latest version of CryptoBox is actively maintained.

| Version        | Supported |
| -------------- | --------- |
| Latest         | ✅ Yes     |
| Older Versions | ❌ No      |

---

## Security Overview

CryptoBox is a client-side password security tool designed for educational and awareness purposes.

The application focuses on password strength evaluation and secure password generation while following basic frontend security practices.

---

## Implemented Security Measures

### Input Validation

All user inputs are processed safely within the browser.

No direct HTML injection is performed using user-generated content.

---

### XSS Prevention

The project follows basic Cross-Site Scripting (XSS) prevention practices:

* No unsafe rendering of user input
* No direct execution of user-provided code
* No dynamic script injection
* Safe DOM updates

---

### Password Privacy

CryptoBox does NOT:

* Store passwords
* Upload passwords
* Share passwords
* Log passwords

All password analysis occurs locally inside the user's browser.

---

### Secure Password Generation

Generated passwords use randomized character selection from:

* Uppercase Letters
* Lowercase Letters
* Numbers
* Symbols

This improves password complexity and resistance to common attacks.

---

### Breach Detection

The project contains a small educational database of common passwords used to demonstrate breach awareness concepts.

This is NOT connected to external breach databases.

---

## Known Limitations

This project is intended for learning purposes.

Current limitations:

* No real breach API integration
* No password storage functionality
* No encryption vault
* Simplified entropy estimation model

---

## Reporting Security Issues

If you discover a security vulnerability or implementation issue, please report it responsibly.

Contact:

Gauri Somwanshi

Email:
[somwanshigauri634@gmail.com](mailto:somwanshigauri634@gmail.com)

---

## Disclaimer

CryptoBox is an educational cybersecurity project and should not be considered a replacement for enterprise password management solutions.

Users are encouraged to use trusted password managers for production environments.

---

### Security First. Privacy Always. 🔐
