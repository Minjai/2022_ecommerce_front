import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../elements/CartItem';
import cls from './productCart.module.scss';

const cart = [
  {
    id: 1,
    title: 'Hello world, React is here !',
    image:
      'data:image/jpeg;base64,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',
    price: 14.5,
    subPrice: 100,
  },
  {
    id: 2,
    title: 'Lorem world dolar ipsum',
    image:
      'data:image/jpeg;base64,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',
    price: 14.5,
    subPrice: 100,
  },
];

const ProductCart = () => {
  const navigate = useNavigate();

  return (
    <div className={cls['cart']}>
      <div className={cls['cart-body']}>
        {cart.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className={cls['cart-footer']}>
        <div className={cls['cart-footer__subTotal']}>
          <span>
            Sub total: <p>$29.76</p>
          </span>
          <span>
            Shipping fee: <p>$29.76</p>
          </span>
        </div>
        <div className={cls['cart-footer__total']}>
          <span>
            Order total: <p>$29.76</p>
          </span>
        </div>
        <div className={cls['cart-footer__buttons']}>
          <button
            onClick={() =>
              navigate(`/${paths.CHECK_OUT}/${paths.CHECK_OUT_ONE}`)
            }
          >
            Continue To Checkout
          </button>
          <button onClick={() => navigate(-1)}>Go Back Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
