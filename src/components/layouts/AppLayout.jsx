import { useDispatch, useSelector } from 'react-redux';
import { initCart } from '../../store/slices/cart';
import ModalWrapper from '../modals/ModalWrapper';
import MobileHeader from '../shared/MobileHeader';
import HeaderModal from '../modals/HeaderModal';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import { useEffect } from 'react';
import Alert from '../modals/Alert';

const AppLayout = () => {
  const { isActive: isModal } = useSelector((state) => state.modal);
  const { isActive } = useSelector((state) => state.burger);

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

  return (
    <>
      {window.innerWidth > 830 && <Header />}
      {window.innerWidth < 830 && <MobileHeader />}
      <Outlet />
      <Footer />

      <Alert />
      <HeaderModal />
      <ModalWrapper />
    </>
  );
};

export default AppLayout;
