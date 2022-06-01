import * as yup from 'yup';

export const signUpValidationSchema = yup
  .object({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().min(14, 'Phone must be correct').required(),
    dateOfBirthDay: yup.string().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPass: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
