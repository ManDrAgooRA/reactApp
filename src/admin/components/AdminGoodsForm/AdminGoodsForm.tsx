import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'grommet';
import { allGoodsSelector } from '@/user/store/selectors';
import { IGoods } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';
import { adminGoodsFormSchema } from '@/admin/constants/validations';
import { changeAdminModalState } from '@/user/store/actions';
import { editProductData } from '@/user/store/thunks/editProduct';
import { addNewProduct } from '@/user/store/thunks/addProduct';
import {
  ImageInput,
  IsSaleInput,
} from '@/admin/components/AdminGoodsForm/inputs';
import { CustomInput } from '@/sharedComponents/CustomInputs/CustomInput/CustomInput';
import { CustomTextArea } from '@/sharedComponents/CustomInputs/CustomTextArea/CustomTextArea';
import { getDefaultValues, getAdminInputs, getMaxId } from '@/admin/utlis';
import './AdminGoodsForm.scss';

export const AdminGoodsForm: FC<IAdminForm> = ({ currentForm, productId }) => {
  const dispatch = useDispatch();
  const goods = useSelector(allGoodsSelector);
  const [productImage, setProductImage] = useState(
    currentForm === 'edit' ? goods[productId || 0].productImage : ''
  );
  const [isSaleValue, setIsSaleValue] = useState(
    currentForm === 'edit' ? goods[productId || 0].isSale : false
  );
  const defaultValue = getDefaultValues(currentForm, goods, productId || 0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productImage: defaultValue?.productImage,
      title: defaultValue?.title,
      categories: defaultValue?.categories,
      price: defaultValue?.price,
      raiting: defaultValue?.raiting,
      countries: defaultValue?.countries,
      description: defaultValue?.description,
      isSale: defaultValue?.isSale,
    },
    resolver: yupResolver(adminGoodsFormSchema),
  });

  const onSubmit = (data: IGoods) => {
    if (currentForm === 'add') {
      const formData = {
        ...data,
        id: getMaxId(goods) + 1,
        isFavorite: false,
        productImage,
        isSale: isSaleValue,
        favorites: [],
      };
      dispatch(
        addNewProduct({
          requestBody: formData,
        })
      );
      dispatch(changeAdminModalState(false));
    } else {
      const formData = {
        ...data,
        id: productId,
        isFavorite: false,
        productImage,
        isSale: isSaleValue,
      };
      dispatch(editProductData({ id: productId || 0, requestBody: formData }));
      dispatch(changeAdminModalState(false));
    }
    reset();
  };

  return (
    <Box className="admin-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        <ImageInput
          register={register}
          errorMessage={errors.productImage?.message || ''}
          productImage={productImage}
          setProductImage={setProductImage}
        />

        {getAdminInputs(errors).map((item) => {
          return (
            <CustomInput
              key={item.name}
              label={item.label}
              name={item.name}
              placeholder={item.label}
              errorMessage={item.errorMessage}
              register={register}
              mask={item.mask}
            />
          );
        })}

        <CustomTextArea
          label="Description"
          name="description"
          placeholder="Description"
          register={register}
          errorMessage={errors.description?.message || ''}
        />

        <IsSaleInput
          register={register}
          errorMessage={errors.isSale?.message || ''}
          setIsSaleValue={setIsSaleValue}
          isSaleValue={isSaleValue}
        />

        <button type="submit" className="btn btn-form">
          {currentForm === 'edit' ? 'Edit product' : 'Add product'}
        </button>
      </form>
    </Box>
  );
};
