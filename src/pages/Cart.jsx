import Description from '../components/elements/UI/Description';
import ProductCart from '../components/partials/ProductCart';
import PageWrapper from '../components/layouts/PageWrapper';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { carts } = useSelector(state => state.cart)

  return (
    <PageWrapper>
      <div className="container w-950">
        <Description>Items In Your Cart ( {carts.length} items )</Description>
        <ProductCart />
      </div>
    </PageWrapper>
  );
};

export default Cart;
