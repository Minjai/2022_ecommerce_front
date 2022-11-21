import PageWrapper from '../../components/layouts/PageWrapper';
import ContactUs from '../../components/partials/ContactUs';
import UserNav from '../../components/partials/UserNav';
import { Outlet, useParams } from 'react-router-dom';

const UserPage = () => {
  const params = useParams();

  return (
    <PageWrapper>
      <div className="container">
        <div className="flex">
          <UserNav param={params} />
          <Outlet />
          <ContactUs />
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserPage;
