import CheckoutContact from '../../components/partials/Checkout/CheckoutContact';
import MobileOrderNav from '../../components/partials/MobileOrderNav';
import PageTitle from '../../components/elements/UI/PageTitle';

const CheckoutSecond = () => {
  return (
    <div className="w-50">
      <PageTitle>Check Out</PageTitle>
      {window.innerWidth < 950 && <MobileOrderNav />}
      <CheckoutContact />
    </div>
  );
};

export default CheckoutSecond;
