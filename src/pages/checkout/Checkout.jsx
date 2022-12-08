import CheckoutPrice from '../../components/partials/Checkout/CheckoutPrice';
import PageWrapper from '../../components/layouts/PageWrapper';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { carts } = useSelector((state) => state.cart);

  return (
    <PageWrapper>
      <div className="container flex w-966">
        <Outlet />
        <CheckoutPrice data={carts} />
      </div>
    </PageWrapper>
  );
};

export default Checkout;
