import Consultation from '../pages/customer-help/Consultation';
import CustomerHelp from '../pages/customer-help/CustomerHelp';
import CheckoutSecond from '../pages/checkout/CheckoutSecond';
import CheckoutFourth from '../pages/checkout/CheckoutFourth';
import SingleConsultation from '../pages/SingleConsultation';
import CheckoutThird from '../pages/checkout/CheckoutThird';
import ChangePassword from '../pages/user/ChangePassword';
import CheckoutOne from '../pages/checkout/CheckoutOne';
import UserQuestions from '../pages/user/UserQuestions';
import WriteReview from '../pages/user/WriteReview';
import UserReviews from '../pages/user/UserReviews';
import EditProfile from '../pages/user/EditProfile';
import UserProfile from '../pages/user/UserProfile';
import SingleProduct from '../pages/SingleProduct';
import Signup from '../pages/authorization/Signup';
import Checkout from '../pages/checkout/Checkout';
import UserPoints from '../pages/user/UserPoints';
import CustomerPost from '../pages/CustomerPost';
import Login from '../pages/authorization/Login';
import UserOrder from '../pages/user/UserOrder';
import News from '../pages/customer-help/News';
import UserPage from '../pages/user/UserPage';
import Faq from '../pages/customer-help/Faq';
import SingleNew from '../pages/SingleNew';
import Category from '../pages/Category';
import Redirect from '../pages/Redirect';
import AboutUs from '../pages/AboutUs';
import Reviews from '../pages/Reviews';
import Order from '../pages/Order';
import Best from '../pages/Best';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import { paths } from './paths';

export const localRoutes = [
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
    path: paths.ABOUT,
    element: <AboutUs />,
  },
  {
    id: 13,
    path: paths.CUSTOMER_POST,
    element: <CustomerPost />,
  },
  {
    id: 14,
    path: paths.PRODUCT,
    element: <SingleProduct />,
  },
  {
    id: 15,
    path: paths.SINGLE_NEW,
    element: <SingleNew />,
  },
  {
    id: 16,
    path: paths.CONSULTATION_INFO,
    element: <SingleConsultation />,
  },
];

export const privateRoutes = [
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
    path: paths.CART,
    element: <Cart />,
  },
  {
    id: 4,
    path: paths.ORDERS,
    element: <Order />,
  },
  {
    id: 5,
    path: paths.CATEGORY,
    element: <Category />,
  },
  {
    id: 6,
    path: paths.BEST,
    element: <Best />,
  },
  {
    id: 7,
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
    id: 8,
    path: paths.REVIEW,
    element: <Reviews />,
  },
  {
    id: 9,
    path: paths.ABOUT,
    element: <AboutUs />,
  },
  {
    id: 11,
    path: paths.CUSTOMER_POST,
    element: <CustomerPost />,
  },
  {
    id: 12,
    path: paths.PRODUCT,
    element: <SingleProduct />,
  },
  {
    id: 13,
    path: `${paths.CHECK_OUT}/*`,
    element: <Checkout />,
    routes: [
      {
        id: paths.CHECK_OUT_ONE,
        path: paths.CHECK_OUT_ONE,
        element: <CheckoutOne />,
      },
      {
        id: paths.CHECK_OUT_SECOND,
        path: paths.CHECK_OUT_SECOND,
        element: <CheckoutSecond />,
      },
      {
        id: paths.CHECK_OUT_THIRD,
        path: paths.CHECK_OUT_THIRD,
        element: <CheckoutThird />,
      },
      {
        id: paths.CHECK_OUT_FOURTH,
        path: paths.CHECK_OUT_FOURTH,
        element: <CheckoutFourth />,
      },
    ],
  },
  {
    id: 14,
    path: paths.SINGLE_NEW,
    element: <SingleNew />,
  },
  {
    id: 15,
    path: paths.CONSULTATION_INFO,
    element: <SingleConsultation />,
  },
  {
    id: 16,
    path: `${paths.MY_PAGE}/*`,
    element: <UserPage />,
    routes: [
      {
        id: paths.ORDER_HISTORY,
        path: paths.ORDER_HISTORY,
        element: <UserOrder />,
      },
      {
        id: paths.USER_PROFILE,
        path: paths.USER_PROFILE,
        element: <UserProfile />,
      },
      {
        id: paths.POINTS,
        path: paths.POINTS,
        element: <UserPoints />,
      },
      {
        id: paths.QUESTIONS,
        path: paths.QUESTIONS,
        element: <UserQuestions />,
      },
      {
        id: paths.USER_REVIEWS,
        path: paths.USER_REVIEWS,
        element: <UserReviews />,
      },
      {
        id: paths.EDIT_PROFILE,
        path: paths.EDIT_PROFILE,
        element: <EditProfile />,
      },
      {
        id: paths.CHANGE_PASSWORD,
        path: paths.CHANGE_PASSWORD,
        element: <ChangePassword />,
      },
      {
        id: paths.WRITE_REVIEW,
        path: paths.WRITE_REVIEW,
        element: <WriteReview />,
      },
    ],
  },
]
