import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardPage } from '@/user/pages/CardPage/CardPage';
import { MainPage } from '@/user/pages/MainPage/MainPage';
import { SignUp } from '@/user/pages/SignUp/SignUp';
import { Cart } from '@/user/pages/Cart/Cart';
import { Login } from '@/user/pages/Login/Login';
import { Error } from '@/user/pages/Error/Error';
import { AdminPage } from '@/admin/pages/AdminPage/AdminPage';
import { OnlyAdminRoute } from '@/admin/routes/OnlyAdminRoute';
import { CLIENT_PATHS } from '@/constants';
import { ADMIN_PATHS } from '@/admin/constants/routes';

export const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route path={CLIENT_PATHS.mainPage} element={<MainPage />} />
      <Route path={`${CLIENT_PATHS.cardPage}/:id`} element={<CardPage />} />
      <Route path={CLIENT_PATHS.signUpPage} element={<SignUp />} />
      <Route path={CLIENT_PATHS.cartPage} element={<Cart />} />
      <Route path={CLIENT_PATHS.loginPage} element={<Login />} />
      <Route element={<OnlyAdminRoute />}>
        <Route path={ADMIN_PATHS.admin} element={<AdminPage />} />
      </Route>
      <Route path={CLIENT_PATHS.errorPage} element={<Error />} />
    </Routes>
  );
};
