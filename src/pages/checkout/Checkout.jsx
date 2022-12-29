import CheckoutPrice from '../../components/partials/Checkout/CheckoutPrice';
import PageWrapper from '../../components/layouts/PageWrapper';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { singleOrder } = useSelector((state) => state.order);
  const { carts } = useSelector((state) => state.cart);

  return (
    <PageWrapper>
      <div className="container flex w-966">
        <Outlet />
        <CheckoutPrice data={singleOrder.length ? singleOrder : carts} />
      </div>
    </PageWrapper>
  );
};

export default Checkout;
