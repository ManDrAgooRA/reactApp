import * as yup from 'yup';

export const adminGoodsFormSchema = yup.object({
  productImage: yup.string().required(),
  title: yup.string().required(),
  categories: yup.string().required(),
  raiting: yup.number().required(),
  price: yup.number().required(),
  countries: yup.string().required(),
  description: yup.string().required(),
  isSale: yup.boolean().required(),
});
