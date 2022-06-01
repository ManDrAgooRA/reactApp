import React, { FC } from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { EmailInput } from '@/user/components/EmailInput/EmailInput';
import { PasswordInput } from '@/user/components/PasswordInput/PasswordInput';
import { fetchLogin } from '@/user/store/thunks/auth';
import { loginValidationSchema } from '@/utils/validations';
import { IUser } from '@/interfaces';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleNavigate = () => {
    navigate('/');
  };

  const onSubmit = (data: IUser) => {
    dispatch(fetchLogin({ requestBody: data, handleNavigate }));
    reset();
  };

  return (
    <div className="container">
      <Heading level={2}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <EmailInput register={register} errorMessage={errors.email?.message} />
        <PasswordInput
          register={register}
          errorMessage={errors.password?.message}
        />
        <button type="submit" className="btn btn-form">
          Login
        </button>
      </form>
    </div>
  );
};
