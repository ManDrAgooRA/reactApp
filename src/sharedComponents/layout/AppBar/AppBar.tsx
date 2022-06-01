import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Box,
  Header,
  Menu,
  ResponsiveContext,
  Image,
  Nav,
} from 'grommet';
import { Menu as MenuIcon, Cart, UserManager } from 'grommet-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeSinUpStatus } from '@/user/store/actions';
import { LINKS } from '@/constants';
import { ADMIN_LINKS } from '@/admin/constants/adminLinks';
import {
  userIsLoginSelector,
  userPersonNameSelector,
  userCartSelector,
  userRoleSelector,
} from '@/user/store/selectors';
import './header.scss';

export const AppBar: FC = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(userIsLoginSelector);
  const userName = useSelector(userPersonNameSelector);
  const cartGoods = useSelector(userCartSelector);
  const userRole = useSelector(userRoleSelector);

  const logOut = () => {
    localStorage.clear();
    dispatch(changeSinUpStatus(false));
  };

  const createItems = () =>
    loginStatus
      ? [
          userRole === 'admin'
            ? {
                label: (
                  <Link to={ADMIN_LINKS.admin}>
                    <UserManager color="light-1" />
                  </Link>
                ),
              }
            : {
                label: (
                  <Link to={LINKS.cart} className="cart cart-icon">
                    <Cart color="light-1" />
                    <span>{cartGoods.length || ''}</span>
                  </Link>
                ),
              },
          {
            label: <Box pad="small">{userName}</Box>,
          },
          {
            label: (
              <Box pad="small" onClick={logOut}>
                Logout
              </Box>
            ),
          },
        ]
      : [
          {
            label: <Link to={LINKS.login}>Login</Link>,
          },
          {
            label: <Link to={LINKS.signUp}>Sign Up</Link>,
          },
        ];

  return (
    <Header background="dark-1" className="header">
      <Link to="/">
        <Image src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" />
      </Link>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="light-1" />}
                items={createItems()}
              />
            </Box>
          ) : (
            <Nav justify="end" direction="row" gap="medium">
              {loginStatus ? (
                <>
                  {userRole === 'admin' ? (
                    <Link to={ADMIN_LINKS.admin}>
                      <UserManager color="light-1" />
                    </Link>
                  ) : (
                    <Link
                      to={LINKS.cart}
                      color="light-1"
                      className="cart cart-icon"
                    >
                      <Cart color="light-1" />
                      <span>{cartGoods.length || ''}</span>
                    </Link>
                  )}
                  <Anchor label={userName} color="light-1" />
                  <Anchor label="Logout" color="light-1" onClick={logOut} />
                </>
              ) : (
                <>
                  <Link to={LINKS.login} color="light-1">
                    Login
                  </Link>
                  <Link to={LINKS.signUp} color="light-1">
                    SignUp
                  </Link>
                </>
              )}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};
