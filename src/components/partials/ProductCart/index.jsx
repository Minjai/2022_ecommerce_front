import { mathSubTotal, mathTotal } from '../../../utils/mathTotal';
import { setSingleItemOrder } from '../../../store/slices/order';
import { useDispatch, useSelector } from 'react-redux';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../elements/CartItem';
import cls from './productCart.module.scss';

const ProductCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { carts } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.user);

  const checkoutHandler = () => {
    navigate(
      isAuth ? `/${paths.CHECK_OUT}/${paths.CHECK_OUT_ONE}` : `/${paths.SIGNUP}`
    );
    dispatch(setSingleItemOrder([]));
  };

  return (
    <div className={cls['cart']}>
      <div className={cls['cart-body']}>
        {carts.length > 0 ? (
          carts.map((item) => <CartItem key={item.id} data={item} />)
        ) : (
          <EmptyText text={'cart'} />
        )}
      </div>
      <div className={cls['cart-footer']}>
        <div className={cls['cart-footer__subTotal']}>
          <span>
            Sub total: <p>${mathSubTotal(carts)}</p>
          </span>
          <span>
            Shipping fee: <p>$1</p>
          </span>
        </div>
        <div className={cls['cart-footer__total']}>
          <span>
            Order total: <p>${mathTotal(carts, 1)}</p>
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
