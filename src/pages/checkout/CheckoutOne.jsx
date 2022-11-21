import CheckoutCondition from '../../components/partials/Checkout/CheckoutCondition';
import PageTitle from '../../components/elements/UI/PageTitle';

const CheckoutOne = () => {
  return (
    <div className='w-50'>
      <PageTitle>Check Out</PageTitle>
      <CheckoutCondition />
    </div>
  );
};

export default CheckoutOne;
