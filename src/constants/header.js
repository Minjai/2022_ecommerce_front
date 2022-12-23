import { FiChevronDown } from 'react-icons/fi';
import { paths } from './paths';

export const currencyLink = [
  {
    id: 1,
    text: 'USD ($)',
  },
  {
    id: 2,
    text: 'USD ($)',
  },
  {
    id: 3,
    text: 'USD ($)',
  },
  {
    id: 4,
    text: 'USD ($)',
  },
];

export const headerLocalMidLinks = [
  {
    id: 1,
    to: paths.LOGIN,
    text: 'Log In',
  },
  {
    id: 2,
    to: paths.SIGNUP,
    text: 'Sign Up',
  },
  {
    id: 3,
    text: 'Alarm',
  },
  {
    id: 4,
    to: paths.CART,
    text: 'Cart',
  },
];

export const headerPrivateMidLinks = [
  {
    id: 1,
    text: 'Log out',
  },
  {
    id: 2,
    to: `${paths.MY_PAGE}/${paths.USER_PROFILE}`,
    text: 'My Page',
  },
  {
    id: 3,
    text: 'Alarm',
  },
  {
    id: 4,
    to: paths.CART,
    text: 'Cart',
  },
];

export const headerLowerLinks = [
  {
    id: 1,
    to: paths.HOME,
    text: 'Home',
  },
  {
    id: 2,
    to: paths.CATEGORY,
    isClick: true,
    text: 'Category',
    icon: <FiChevronDown />,
  },
  {
    id: 3,
    to: paths.BEST,
    text: 'Best',
  },
  {
    id: 4,
    to: `${paths.CUSTOMER_HELP}/${paths.NEWS}`,
    text: 'Customer Help',
    icon: <FiChevronDown />,
    list: [
      {
        id: 1,
        text: 'News',
        to: `/${paths.CUSTOMER_HELP}/${paths.NEWS}`
      },
      {
        id: 2,
        text: 'FAQ',
        to: `/${paths.CUSTOMER_HELP}/${paths.FAQ}`
      },
      {
        id: 3,
        text: '1:1 General Consulation',
        to: `/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`
      },
    ],
  },
  {
    id: 5,
    to: paths.REVIEW,
    text: 'Review',
  },
  {
    id: 6,
    to: paths.ABOUT,
    text: 'About Us',
  },
];

export const customerHelpLinks = [
  {
    id: 1,
    to: paths.NEWS,
    text: 'News',
  },
  {
    id: 2,
    to: paths.FAQ,
    text: 'FAQ',
  },
  {
    id: 3,
    to: paths.CONSULTATION,
    text: '1:1 General Consultation',
  },
];
