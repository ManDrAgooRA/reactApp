import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FormField, MaskedInput } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addNewRole, setMessage, changeModalState } from '@/user/store/actions';

const schema = yup.object({
  role: yup.string().required('Role is a required field'),
});

export const AddRoleForm: FC<{ handleClose(): void }> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { role: string }) => {
    dispatch(addNewRole(data.role));
    dispatch(setMessage('Role was added'));
    dispatch(changeModalState(true));
    handleClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
      <FormField
        label="Add new role"
        placeholder="Add new role"
        error={errors.role?.message}
        {...register('role')}
      >
        <MaskedInput name="role" placeholder="Add new role" />
      </FormField>
      <button type="submit" className="btn btn-form btn-form__admin">
        Add role
      </button>
    </form>
  );
};
