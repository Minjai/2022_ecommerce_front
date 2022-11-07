import { BsChevronDown } from 'react-icons/bs';
import { paths } from "./paths";

export const currencyLink = [
  {
    id: 1,
    text: 'USD ($)'
  },
  {
    id: 2,
    text: 'USD ($)'
  },
  {
    id: 3,
    text: 'USD ($)'
  },
  {
    id: 4,
    text: 'USD ($)'
  },
]

export const headerMidLinks = [
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
    to: paths.CART,
    text: 'Cart',
  },
  {
    id: 4,
    to: paths.ORDERS,
    text: 'Orders',
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
    text: 'Category',
    icon: <BsChevronDown/>,
    list: [
      {
        id: 1,
        text: 'Hair Loss',
        icon: <BsChevronDown/>,
      },
      {
        id: 2,
        text: 'Sleeping Aid',
        icon: <BsChevronDown/>,
      },
      {
        id: 3,
        text: 'Skin Care',
        icon: <BsChevronDown/>,
      },
      {
        id: 4,
        text: "Hair's Health",
        icon: <BsChevronDown/>,
      },
      {
        id: 5,
        text: "Weight Loss",
        icon: <BsChevronDown/>,
      }
    ]
  },
  {
    id: 3,
    to: paths.BEST,
    text: 'Best',
  },
  {
    id: 4,
    to: `${paths.CUSTOMER_HELP}/`,
    text: 'Customer Help',
    icon: <BsChevronDown/>,
    list: [
      {
        id: 1,
        text: 'News',
      },
      {
        id: 2,
        text: '1:1 General',
      },
      {
        id: 3,
        text: '1:1 General Consulation',
      },
    ]
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
  {
    id: 7,
    to: paths.CONTACT,
    text: 'Contact Us',
  },
]
