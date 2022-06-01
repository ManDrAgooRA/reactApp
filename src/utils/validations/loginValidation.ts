import * as yup from 'yup';

export const loginValidationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  .required();
