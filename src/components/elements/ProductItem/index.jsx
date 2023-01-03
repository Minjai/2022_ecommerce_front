import { mathCurrency } from '../../../utils/mathCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../store/slices/cart';
import { paths } from '../../../constants/paths';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import cls from './productItem.module.scss';
import Rating from '../UI/Rating';

const ProductItem = ({ item, isBest }) => {
  const {
    product_name,
    images,
    prices,
    get_review_start,
    category,
    id,
    the_best_number_product,
  } = item;

  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = (id) => {
    return carts?.find((item) => item.id === id);
  };

  const cartNavigate = (e) => {
    e.stopPropagation();

    navigate(`/${paths.CART}`);
    window.scrollTo(window.scrollX, 0);
  };

  const addCartHandler = (e) => {
    e.stopPropagation();

    dispatch(addCart({ ...item, pickedPackage: item?.prices[0] }));
    const cart = JSON.parse(localStorage.getItem('shop-cart'));
    localStorage.setItem(
      'shop-cart',
      JSON.stringify([...cart, { ...item, pickedPackage: item?.prices[0] }])
    );
  };

  const productNavigate = () => {
    navigate(`/${paths.SINGLE_PRODUCT}/${id}`);
    window.scrollTo(window.scrollX, 0);
  };

  const { activeCurrency } = useSelector((state) => state.currency);

  return (
    <div onClick={productNavigate} className={cls['product-item']}>
      <div className={cls['product-item__header']}>
        <img
          src={images?.find((item) => item.is_feature === true)?.image}
          alt="product-pic"
        />
        {the_best_number_product && isBest && (
          <span>
            No. <p>{the_best_number_product}</p>{' '}
          </span>
        )}
      </div>
      <div className={cls['product-item__body']}>
        <span>{category.title}</span>
        <p>{product_name}</p>
        <Rating productRating={get_review_start.star__avg} />
        <div className={cls['product-item__body__price']}>
          <span>
            {activeCurrency?.currency_value}{' '}
            {mathCurrency(
              prices[0]?.selling_price,
              activeCurrency?.currency_price
            )}{' '}
            ({activeCurrency?.currency})
          </span>
          <button onClick={isInCart(id) ? cartNavigate : addCartHandler}>
            <FiShoppingCart /> {isInCart(id) ? 'Cart' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
