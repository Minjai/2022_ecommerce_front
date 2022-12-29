import { deleteCart } from '../../../store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../constants/paths';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import cls from './cartItem.module.scss';

const CartItem = ({ data }) => {
  const { product_name, images, id, pickedPackage, prices } = data;

  const { activeCurrency } = useSelector((state) => state.currency);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.stopPropagation();

    dispatch(deleteCart(id));
    const cart = JSON.parse(localStorage.getItem('shop-cart'));
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('shop-cart', JSON.stringify(newCart));
  };

  const finalPrice = prices?.find(
    (item) =>
      item?.currency?.currency === activeCurrency?.currency &&
      item?.package === pickedPackage?.package
  );

  return (
    <div
      onClick={() => navigate(`/${paths.SINGLE_PRODUCT}/${id}`)}
      className={cls['cart-item']}
    >
      <div className={cls['cart-item__image']}>
        <img
          src={images?.find((item) => item.is_feature === true).image}
          alt="product-pic"
        />
        <div>
          <p>{product_name}</p>
          <b>{pickedPackage?.package}</b>
          <span>
            {activeCurrency?.currency_value}{' '}
            {finalPrice?.selling_price}
          </span>
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
