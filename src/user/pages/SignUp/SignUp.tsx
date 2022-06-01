import React, { FC, useState } from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '@/user/store/thunks/auth';
import {
  PhoneInput,
  DateInput,
  UserNameInput,
  ConfirmPassword,
} from '@/user/pages/SignUp/Inputs';
import { EmailInput } from '@/user/components/EmailInput/EmailInput';
import { PasswordInput } from '@/user/components/PasswordInput/PasswordInput';
import { signUpValidationSchema } from '@/utils/validations';
import { IUser } from '@/interfaces';
import './signUp.scss';

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const handleNavigate = () => {
    navigate('/');
  };

  const onSubmit = (data: IUser) => {
    dispatch(
      fetchSignUp({
        requestBody: { ...data, role: 'user', cart: [], favorites: [] },
        handleNavigate,
      })
    );
    reset();
  };

  return (
    <div className="container">
      <Heading level={2}>SignUp</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <UserNameInput
          register={register}
          errorMessage={errors.userName?.message}
        />
        <PhoneInput register={register} errorMessage={errors.phone?.message} />
        <DateInput
          register={register}
          errorMessage={errors.dateOfBirthDay?.message}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
        <EmailInput register={register} errorMessage={errors.email?.message} />
        <PasswordInput
          register={register}
          errorMessage={errors.password?.message}
        />
        <ConfirmPassword
          register={register}
          errorMessage={errors.confirmPass?.message}
        />
        <button type="submit" className="btn btn-form">
          SignUp
        </button>
      </form>
    </div>
  );
};
