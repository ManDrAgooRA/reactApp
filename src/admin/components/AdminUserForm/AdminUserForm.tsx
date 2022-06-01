import React, { FC, useState } from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { DateInput } from '@/user/pages/SignUp/Inputs';
import { CustomInput } from '@/sharedComponents/CustomInputs/CustomInput/CustomInput';
import { addNewUser, editUserData } from '@/user/store/thunks';
import { adminAllUserSelector } from '@/user/store/selectors';
import { RoleInput } from '@/admin/components/AdminUserForm/inputs/RoleInput';
import {
  changeAdminModalState,
  setMessage,
  changeModalState,
} from '@/user/store/actions';
import {
  getDefaultUserValues,
  getUserInputs,
  getMaxId,
  getUniqueEmail,
} from '@/admin/utlis';
import { IUser } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';
import { adminUserFormSchema } from '@/admin/constants/validations';

export const AdminUserForm: FC<IAdminForm> = ({ currentForm, userId }) => {
  const allUsers = useSelector(adminAllUserSelector);
  const [role, setRole] = useState(
    currentForm === 'edit' ? allUsers[userId || 0].role : 'user'
  );
  const [dateValue, setDateValue] = useState(
    currentForm === 'edit' ? allUsers[userId || 0].dateOfBirthDay : ''
  );

  const dispatch = useDispatch();
  const defaultValue = getDefaultUserValues(currentForm, allUsers, userId || 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: defaultValue?.userName,
      phone: defaultValue?.phone,
      dateOfBirthDay: defaultValue?.dateOfBirthDay,
      email: defaultValue?.email,
      role: defaultValue?.role,
    },
    resolver: yupResolver(adminUserFormSchema),
  });

  const onSubmit = (data: IUser) => {
    const user = { ...data, role, id: userId, cart: [], favorites: [] };
    const uniqueEmail = getUniqueEmail({
      currentUserId: userId || 1,
      newEmail: data.email || '',
      userList: allUsers,
    });
    if (currentForm === 'add') {
      dispatch(
        addNewUser({
          requestBody: {
            ...user,
            password: '1234567890',
            id: getMaxId(allUsers) + 1,
          },
        })
      );
    }

    if (currentForm === 'edit' && !uniqueEmail) {
      dispatch(
        editUserData({
          id: userId || 0,
          requestBody: { ...user, id: userId || 0, password: '1234567890' },
        })
      );
    } else {
      dispatch(setMessage('Email already exist'));
      dispatch(changeModalState(true));
    }
    dispatch(changeAdminModalState(false));
    reset();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        {getUserInputs(errors).map((item) => {
          return (
            <CustomInput
              key={item.name}
              label={item.label}
              name={item.name}
              placeholder={item.label}
              errorMessage={item.errorMessage || ''}
              register={register}
              mask={item.mask}
            />
          );
        })}
        <DateInput
          register={register}
          errorMessage={errors.dateOfBirthDay?.message}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
        <RoleInput
          register={register}
          errorMessage={errors.role?.message}
          role={role}
          setRole={setRole}
        />
        <button type="submit" className="btn btn-form">
          {currentForm === 'edit' ? 'Edit user' : 'Add user'}
        </button>
      </form>
    </Box>
  );
};
