import CheckoutPrice from '../../components/partials/Checkout/CheckoutPrice';
import PageWrapper from '../../components/layouts/PageWrapper';
import { Outlet } from 'react-router-dom';

const Checkout = () => {
  return (
    <PageWrapper>
      <div className="container flex w-966">
        <Outlet/>
        <CheckoutPrice/>
      </div>
    </PageWrapper>
  );
};

export default Checkout;
