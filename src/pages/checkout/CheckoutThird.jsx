import CheckoutDelivery from '../../components/partials/Checkout/CheckoutDelivery';
import MobileOrderNav from '../../components/partials/MobileOrderNav';
import PageTitle from '../../components/elements/UI/PageTitle';

const CheckoutThird = () => {
  return (
    <div className="w-50">
      <PageTitle>Check Out</PageTitle>
      {window.innerWidth < 950 && <MobileOrderNav />}
      <CheckoutDelivery />
    </div>
  );
};

export default CheckoutThird;
