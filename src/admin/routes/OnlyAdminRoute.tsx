import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '@/user/pages/Login/Login';
import { ROLES } from '@/constants';
import { userRoleSelector, userIsLoginSelector } from '@/user/store/selectors';

export const OnlyAdminRoute: FC = () => {
  const userRole = useSelector(userRoleSelector);
  const isLogin = useSelector(userIsLoginSelector);
  return userRole === ROLES.admin && isLogin ? <Outlet /> : <Login />;
};
