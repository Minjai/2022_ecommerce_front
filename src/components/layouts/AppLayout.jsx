import { useDispatch, useSelector } from 'react-redux';
import { initCart } from '../../store/slices/cart';
import MobileHeader from '../shared/MobileHeader';
import { lazy, Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import { axiosInstance } from '../../constants/axios';
import { setUserInfo } from '../../store/slices/user/user';

const ModalWrapper = lazy(() => import('../modals/ModalWrapper'));
const HeaderModal = lazy(() => import('../modals/HeaderModal'));
const Footer = lazy(() => import('../shared/Footer'));
const Alert = lazy(() => import('../modals/Alert'));

const AppLayout = () => {
  const { isActive: isModal } = useSelector((state) => state.modal);
  const { isActive } = useSelector((state) => state.burger);
  const { isAuth } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive || isModal) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflowY = 'scroll';
      window.document.body.style.overflowX = 'hidden';
    }
  }, [isActive, isModal]);

  useEffect(() => {
    if (localStorage.getItem('shop-cart')) {
      dispatch(initCart(JSON.parse(localStorage.getItem('shop-cart'))));
    } else {
      localStorage.setItem('shop-cart', JSON.stringify([]));
    }
  }, [dispatch]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axiosInstance.get(
          'accounts/profiles/get_userinfo/' ,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        
        dispatch(setUserInfo(response.data))
      } catch (error) {
        console.log(error.response);
      } 
    };

    request()
  }, [isAuth]);

  return (
    <>
      {window.innerWidth > 830 && <Header />}
      {window.innerWidth < 830 && <MobileHeader />}
      <Outlet />

      <Suspense>
        <Footer />
        <Alert />
        <HeaderModal />
        <ModalWrapper />
      </Suspense>
    </>
  );
};

export default AppLayout;
