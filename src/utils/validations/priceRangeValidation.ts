import * as yup from 'yup';

export const priceRangeValidationSchema = yup.object().shape({
  minValue: yup.number().positive().integer(),
  maxValue: yup.number().positive().integer(),
});
