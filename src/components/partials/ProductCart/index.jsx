import { mathSubTotal, mathTotal } from '../../../utils/mathTotal';
import { setSingleItemOrder } from '../../../store/slices/order';
import { useDispatch, useSelector } from 'react-redux';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../elements/CartItem';
import cls from './productCart.module.scss';
import { mathShipping } from '../../../utils/mathCurrency';

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.user);
  const { shippings } = useSelector((state) => state.shipping);

  const checkoutHandler = () => {
    navigate(
      isAuth ? `/${paths.CHECK_OUT}/${paths.CHECK_OUT_ONE}` : `/${paths.SIGNUP}`
    );
    dispatch(setSingleItemOrder([]));
  };

  const { activeCurrency } = useSelector((state) => state.currency);

  console.log(shippings);
  console.log(mathShipping(shippings, +activeCurrency?.currency_price));

  return (
    <div className={cls['cart']}>
      {carts.length > 0 ? (
        carts.map((item) => <CartItem key={item.id} data={item} />)
      ) : (
        <EmptyText text={'cart'} />
      )}
      <div className={cls['cart-footer']}>
        <div className={cls['cart-footer__subTotal']}>
          <span>
            Sub total:{' '}
            <p>
              {activeCurrency?.currency_value}{' '}
              {mathSubTotal(activeCurrency, carts)?.toFixed(2)}
            </p>
          </span>
          <span>
            Shipping fee:{' '}
            <p>
              {shippings?.length > 0
                ? (activeCurrency?.currency_value,
                  mathShipping(shippings, +activeCurrency?.currency_price))
                : `${activeCurrency?.currency_value} 0`}
            </p>
          </span>
        </div>
        <div className={cls['cart-footer__total']}>
          <span>
            Order total:{' '}
            <p>
              {activeCurrency?.currency_value}{' '}
              {mathTotal(
                activeCurrency,
                carts,
                activeCurrency?.currency_price
              )?.toFixed(2)}
            </p>
          </span>
        </div>
        <div className={cls['cart-footer__buttons']}>
          <button onClick={checkoutHandler}>Continue To Checkout</button>
          <button onClick={() => navigate(-1)}>Go Back Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
