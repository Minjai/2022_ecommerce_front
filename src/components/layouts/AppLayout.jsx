import ModalWrapper from '../modals/ModalWrapper';
import MobileHeader from '../shared/MobileHeader';
import HeaderModal from '../modals/HeaderModal';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import { useEffect } from 'react';

const AppLayout = () => {
  const { isActive } = useSelector((state) => state.burger);

  useEffect(() => {
    if (isActive) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflowY = 'scroll';
      window.document.body.style.overflowX = 'hidden';
    }
  }, [isActive]);

  return (
    <>
      {window.innerWidth > 830 && <Header />}
      {window.innerWidth < 830 && <MobileHeader />}
      <Outlet />
      <Footer />

      <HeaderModal />
      <ModalWrapper />
    </>
  );
};

export default AppLayout;
