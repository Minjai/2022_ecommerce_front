import { deleteCart } from '../../../store/slices/cart';
import { paths } from '../../../constants/paths';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cls from './cartItem.module.scss';

const CartItem = ({ data }) => {
  const { product_name, images, id, pickedPackage } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const deleteHandler = (e) => {
    e.stopPropagation()
    
    dispatch(deleteCart(id))
    const cart = JSON.parse(localStorage.getItem("shop-cart"));
    const newCart = cart.filter(item => item.id !== id)
    localStorage.setItem('shop-cart',  JSON.stringify(newCart))
  }

  return (
    <div onClick={() => navigate(`/${paths.SINGLE_PRODUCT}/${id}`)} className={cls['cart-item']}>
      <div className={cls['cart-item__image']}>
        <img src={images?.find(item => item.is_feature === true).image} alt="product-pic" />
        <div>
          <p>{product_name}</p>
          <b>{pickedPackage?.package}</b>
          <span>$ {pickedPackage?.selling_price}</span>
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
