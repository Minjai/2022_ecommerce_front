import CheckoutCondition from '../../components/partials/Checkout/CheckoutCondition';
import MobileOrderNav from '../../components/partials/MobileOrderNav';
import PageTitle from '../../components/elements/UI/PageTitle';

const CheckoutOne = () => {
  return (
    <div className='w-50'>
      <PageTitle>Check Out</PageTitle>
      {window.innerWidth < 950 && <MobileOrderNav/>}
      <CheckoutCondition />
    </div>
  );
};

export default CheckoutOne;
