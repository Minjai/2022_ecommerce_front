import { deleteCart } from '../../../store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../constants/paths';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import cls from './cartItem.module.scss';
import { mathCurrency } from '../../../utils/mathCurrency';

const CartItem = ({ data }) => {
  const { product_name, images, id, pickedPackage } = data;

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

  return (
    <div
      onClick={() => navigate(`/${paths.SINGLE_PRODUCT}/${id}`)}
      className={cls['cart-item']}
    >
      <div className={cls['cart-item__image']}>
        <img
          src={images?.find((item) => item.is_feature === true)?.image}
          alt="product-pic"
        />
        <div>
          <p>{product_name}</p>
          <b>{pickedPackage?.package}</b>
          <span>
            {activeCurrency?.currency_value}{' '}
            {mathCurrency(
              pickedPackage?.selling_price,
              activeCurrency?.currency_price
            )}
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
