import cls from './cartItem.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

const CartItem = ({ data }) => {
  const { title, image, price, subPrice } = data;

  return (
    <div className={cls['cart-item']}>
      <div className={cls['cart-item__image']}>
        <img src={image} alt="product-pic" />
        <div>
          <p>{title}</p>
          <b>{subPrice}</b>
          <span>${price}</span>
        </div>
      </div>
      <div className={cls['cart-item__closer']}>
        <span>
          <IoCloseOutline />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
