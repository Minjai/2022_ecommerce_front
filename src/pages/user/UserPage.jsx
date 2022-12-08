import MobileUserNav from '../../components/partials/MobileUserNav';
import PageWrapper from '../../components/layouts/PageWrapper';
import ContactUs from '../../components/partials/ContactUs';
import UserNav from '../../components/partials/UserNav';
import { Outlet, useParams } from 'react-router-dom';

const UserPage = () => {
  const params = useParams();
  return (
    <PageWrapper>
      <div className="container flex my-page">
        <UserNav param={params} />
        {window.innerWidth < 850 && <h3 className='user-page-title'>My Page</h3>}
        <Outlet />
        {window.innerWidth < 850 && <MobileUserNav param={params} />}
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default UserPage;
