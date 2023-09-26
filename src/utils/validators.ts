// validators.ts

// Function to validate an email address
export function isValidEmail(email: string): boolean {
    // A simple regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}

// Function to validate a password (e.g., minimum length)
export function isValidPassword(password: string): boolean {
    return password.length >= 8; // Change the validation criteria as needed
}

// Function to validate a username (e.g., no special characters)
export function isValidUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
}

// Function to validate a date (e.g., in the format YYYY-MM-DD)
export function isValidDate(dateString: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
}
