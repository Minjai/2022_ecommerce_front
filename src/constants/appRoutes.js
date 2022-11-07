import Consultation from '../pages/customer-help/Consultation';
import CustomerHelp from '../pages/customer-help/CustomerHelp';
import Signup from '../pages/authorization/Signup';
import Login from '../pages/authorization/Login';
import News from '../pages/customer-help/News';
import Faq from '../pages/customer-help/Faq';
import ContactUs from '../pages/ContactUs';
import Category from '../pages/Category';
import Redirect from '../pages/Redirect';
import Reviews from '../pages/Reviews';
import Order from '../pages/Order';
import Best from '../pages/Best';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import { paths } from './paths';

export const appRoutes = [
  {
    id: 1,
    index: true,
    element: <Home />,
  },
  {
    id: 2,
    path: paths.REDIRECT,
    element: <Redirect />,
  },
  {
    id: 3,
    path: paths.LOGIN,
    element: <Login />,
  },
  {
    id: 4,
    path: paths.SIGNUP,
    element: <Signup />,
  },
  {
    id: 5,
    path: paths.CART,
    element: <Cart />,
  },
  {
    id: 6,
    path: paths.ORDERS,
    element: <Order />,
  },
  {
    id: 7,
    path: paths.CATEGORY,
    element: <Category />,
  },
  {
    id: 8,
    path: paths.BEST,
    element: <Best />,
  },
  {
    id: 9,
    path: `${paths.CUSTOMER_HELP}/*`,
    element: <CustomerHelp />,
    routes: [
      {
        id: paths.NEWS,
        path: paths.NEWS,
        element: <News />,
      },
      {
        id: paths.FAQ,
        path: paths.FAQ,
        element: <Faq />,
      },
      {
        id: paths.CONSULTATION,
        path: paths.CONSULTATION,
        element: <Consultation />,
      },
    ],
  },
  {
    id: 10,
    path: paths.REVIEW,
    element: <Reviews />,
  },
  {
    id: 11,
    path: paths.REVIEW,
    element: <Reviews />,
  },
  {
    id: 12,
    path: paths.CONTACT,
    element: <ContactUs />,
  },
];
