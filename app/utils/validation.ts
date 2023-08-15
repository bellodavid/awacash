import * as Yup from 'yup';

const passwordRegExr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).{5,}$/;

const password = Yup.string()
  .matches(
    passwordRegExr,
    'Password must contain at least 5 characters, including upper & lower case and numbers',
  )
  .required('Please enter your password')
  .min(8, 'Password must be at least 8 characters long')
  .label('Password');

const password2 = Yup.string().required('Please enter your password').label('Password');

const email = Yup.string()
  .required('Please enter your email')
  .email('Email is invalid')
  .label('Email');

export const accountNumber = Yup.string()
  .required('Please enter account Number')
  .min(10, 'Account number must be at least 10 digits long')
  .label('Account number');

export const confirmPassword = Yup.string()
  .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  .required('Please confirm your password');

export const phoneNumber = Yup.string()
  .required('Please enter your phone number')
  .min(10, 'Phone number must be at least 10 digits long')
  .label('Phone Number');

export const otp = Yup.string()
  .required('Please enter your OTP')
  .min(5, 'OTP must be at least 5 digits long')
  .label('OTP');

export const firstName = Yup.string()
  .required('Please input your legal first name')
  .min(2, 'First name must be at least 2 digits long')
  .label('First Name');

export const lastName = Yup.string()
  .required('Please input your legal last name')
  .min(2, 'Last name must be at least 2 digits long')
  .label('Last Name');

export const middleName = Yup.string()
  .required('Please input your legal middle name')
  .min(2, 'Middle name must be at least 2 digits long')
  .label('Middle Name');

// const name = Yup.string()
//   .required('Please input your legal full name')
//   .min(2, 'Name must be at least 2 digits long')
//   .label('Name');

export const emailValidationSchema = Yup.object().shape({
  email,
});

export const loginValidationSchema = Yup.object().shape({
  email,
  password: password2,
});

export const signUpValidationSchema = Yup.object().shape({
  confirmPassword,
  email,
  password,
  phoneNumber,
});

export const otpValidationSchema = Yup.object().shape({
  otp,
});

export const personalDetailsValidationSchema = Yup.object().shape({
  firstName,
  lastName,
  middleName,
});

export const verifyEmailValidationSchema = Yup.object().shape({
  code: Yup.string()
    .required('Please enter your OTP')
    .min(6, 'OTP must be at least 6 digits long')
    .label('OTP'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  confirmPassword,
  password,
});

export const accountNumberValidationSchema = Yup.object().shape({
  accountNumber,
});

export const verifyBVNValidationSchema = Yup.object().shape({
  bvn: Yup.string()
    .required('Please enter your BVN')
    .min(11, 'BVN must be at least 11 digits long')
    .label('BVN'),
  dob: Yup.string().required('Please select your Date of birth').label('Date of Birth'),
});
