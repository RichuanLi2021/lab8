// A simple validation module
export const validateName = (name) => {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
  };


export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


export const validatePassword = (password) => {
    // For demonstration: must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).+$/;
    return passwordPattern.test(password);
  };