const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^\d{10}$/;

export const validateFormData = (name, value, obj) => {
    if (!value) return 'This field is required';

    switch (name) {
        case 'name':
            if (!nameRegex.test(value)) {
                return 'Test name must contain characters only';
            }
            break;
        case 'email':
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email';
            }
            break;
        case 'mobileNo':
        case 'alternateNo':
            if (!mobileRegex.test(value)) {
                return 'Please enter a mobile number';
            }
            break;

        default:
            return "";
    }
}