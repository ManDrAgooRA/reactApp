export const THEME = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      focus: 'transparent',
    },
  },
  card: {
    hover: {
      container: {
        elevation: 'large',
      },
    },
  },
};

export const FILTERS = [{ name: 'categories' }, { name: 'countries' }];
export const LINKS = {
  signUp: '/signUp',
  login: '/login',
  cart: '/cart',
  goods: '/goods',
};

export const CLIENT_PATHS = {
  mainPage: '/',
  cardPage: 'goods',
  signUpPage: 'signUp',
  cartPage: 'cart',
  loginPage: 'login',
  errorPage: '*',
  admin: '/admin',
  main: '/',
};

export const EMAIL_MASK = [
  { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
  { fixed: '@' },
  { regexp: /^[\w]+$/, placeholder: 'my' },
  { fixed: '.' },
  { regexp: /^[\w]+$/, placeholder: 'com' },
];

export const CART_MASK = [{ regexp: /^[0-9]{1,10}$/ }];

export const ROLES = {
  admin: 'admin',
  user: 'user',
};
export const STRIPE_PUBCLICK_KEY =
  process.env.STRIPE_PUBLISH_KEY || 'mockStirng';
