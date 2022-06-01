import { AppThunk } from '@/interfaces';
import { changeModalState, setMessage, addProduct } from '@/user/store/actions';
import { addProductApi } from '@/admin/api';
import { IRequestBodyAdmin } from '@/admin/interfaces';

export const addNewProduct = ({ requestBody }: IRequestBodyAdmin): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await addProductApi({ requestBody });
      if (data.ok) {
        dispatch(addProduct(requestBody));
        dispatch(setMessage('Product was added'));
        dispatch(changeModalState(true));
      }
    } catch (e: any) {
      dispatch(setMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};
