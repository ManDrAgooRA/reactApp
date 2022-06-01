import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FormField, Box, FileInput } from 'grommet';
import { IProductImageInput } from '@/admin/interfaces';
import { setMessage, changeModalState } from '@/user/store/actions';

export const ImageInput: FC<IProductImageInput> = ({
  register,
  errorMessage,
  productImage,
  setProductImage,
}) => {
  const dispatch = useDispatch();

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      if (file.type.split('/')[0] === 'image') {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        dispatch(setMessage('File must be jpg/png/gif/jpeg'));
        dispatch(changeModalState(true));
      }
    });
  };

  const uploadImage = async (e: any) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setProductImage(base64);
    } else {
      setProductImage('');
    }
  };

  return (
    <Box align="center" justify="start" pad="small">
      <Box width="medium">
        Picture:
        <FormField placeholder="Product Image" error={errorMessage}>
          <FileInput
            {...register('productImage')}
            value={productImage}
            onChange={uploadImage}
          />
        </FormField>
      </Box>
      <img src={productImage} className="form-img" />
    </Box>
  );
};
