import * as yup from 'yup';

export const adminUserFormSchema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  dateOfBirthDay: yup.string().required(),
  phone: yup.string().min(14, 'Phone must be correct').required(),
});
