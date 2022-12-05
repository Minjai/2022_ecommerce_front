import { deleteCart } from '../../../store/slices/cart';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import cls from './cartItem.module.scss';

const CartItem = ({ data }) => {
  const { product_name, images, prices, subPrice, id } = data;

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteCart(id))
    const cart = JSON.parse(localStorage.getItem("shop-cart"));
    const newCart = cart.filter(item => item.id !== id)
    localStorage.setItem('shop-cart',  JSON.stringify(newCart))
  }

  return (
    <div className={cls['cart-item']}>
      <div className={cls['cart-item__image']}>
        <img src={images?.find(item => item.is_feature === true).image} alt="product-pic" />
        <div>
          <p>{product_name}</p>
          <b>{subPrice}</b>
          <span>${prices?.length && prices[0]?.selling_price}</span>
        </div>
      </div>
      <div className={cls['cart-item__closer']}>
        <span onClick={deleteHandler}>
          <IoCloseOutline />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
