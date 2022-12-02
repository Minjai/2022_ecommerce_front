import Description from '../components/elements/UI/Description';
import ProductCart from '../components/partials/ProductCart';
import PageWrapper from '../components/layouts/PageWrapper';

const Cart = () => {
  return (
    <PageWrapper>
      <div className="container w-950">
        <Description>Items In Your Cart ( 2 items )</Description>
        <ProductCart />
      </div>
    </PageWrapper>
  );
};

export default Cart;
