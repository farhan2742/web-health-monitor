const validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateRegisterInput(data) {

    // Error Object
 
    let errors = {};

    // Normalize strings

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // Validate name
    
    // Check name length

    if(!validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = 'Name must be between 2 and 30 characters';
    };

    // Check if name field is empty

    if(validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    };

    // Validate Email

    // Check if email address is valid
    
    if(!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    };

    // Check if email field is empty

    if(validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    };
    
    // Validate password
    
    // Check password length

    if(!validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must be between 6 and 30 characters';
    };

    // Check if password field is empty

    if(validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    };

    // Validate confirm password

    // Check if both passwords match

    if(!validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    };

    // Check if confirm password field is empty

    if(validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    };

    // return errors

    return {
        errors,
        isValid : isEmpty(errors)
    };
};