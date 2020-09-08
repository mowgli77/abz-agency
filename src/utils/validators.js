export const required = value => value ? undefined : '! Required';

export const maxTextLength = max => value =>
    value && value.length > max ? `! Must be ${max} characters or less` : undefined;

export const minTextLength = min => value =>
    value && value.length < min ? `! Must be at least ${min} characters` : undefined

export const notEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? '! Invalid email address'
        : undefined;

export const notPhone = value =>
    value && !/^[\+]{0,1}380([0-9]{9})$/i.test(value)
        ? '! Invalid phone number'
        : undefined;


