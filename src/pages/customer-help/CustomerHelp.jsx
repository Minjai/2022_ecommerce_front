import PageWrapper from '../../components/layouts/PageWrapper';
import PageTitle from '../../components/elements/UI/PageTitle';
import CustomerNav from '../../components/elements/CustomerNav';
import { Outlet } from 'react-router-dom';

const CustomerHelp = () => {
  return (
    <PageWrapper>
      <div className="container">
        <div className="customer">
          <PageTitle>Customer Help</PageTitle>
          <CustomerNav />
          <Outlet />
        </div>
      </div>
    </PageWrapper>
  );
};

export default CustomerHelp;
