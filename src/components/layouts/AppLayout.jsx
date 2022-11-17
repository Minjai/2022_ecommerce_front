import MobileHeader from '../shared/MobileHeader';
import HeaderModal from '../modals/HeaderModal';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const AppLayout = () => {
  return (
    <>
      {window.innerWidth > 830 && <Header />}
      {window.innerWidth < 830 && <MobileHeader />}
      <Outlet />
      <Footer />

      <HeaderModal/>
    </>
  );
};

export default AppLayout;
