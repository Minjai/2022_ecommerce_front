import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../store/slices/cart';
import { paths } from '../../../constants/paths';
import { GiShoppingCart } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import cls from './productItem.module.scss';
import Rating from '../UI/Rating';

const ProductItem = ({ item }) => {
  const { product_name, images, prices, get_review_start, category, top, id } =
    item;

  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = (id) => {
    return carts?.find((item) => item.id === id);
  };

  const cartNavigate = (e) => {
    e.stopPropagation()

    navigate(`/${paths.CART}`);
    window.scrollTo(window.scrollX, 0);
  };

  const addCartHandler = (e) => {
    e.stopPropagation()

    dispatch(addCart(item));
    const cart = JSON.parse(localStorage.getItem("shop-cart"));
    localStorage.setItem('shop-cart',  JSON.stringify([...cart, item]))
  };

  const productNavigate = (e) => {
    navigate(`/${paths.SINGLE_PRODUCT}/${id}`);
    window.scrollTo(window.scrollX, 0);
  }

  return (
    <div onClick={productNavigate} className={cls['product-item']}>
      <div className={cls['product-item__header']}>
        <img src={images?.find(item => item.is_feature === true)?.image} alt="product-pic" />
        {top && (
          <span>
            No. <p>{top}</p>{' '}
          </span>
        )}
      </div>
      <div className={cls['product-item__body']}>
        <span>{category.title}</span>
        <p>{product_name}</p>
        <Rating productRating={get_review_start.star__avg} />
        <div className={cls['product-item__body__price']}>
          <span>
            ${prices?.length && prices[0]?.selling_price} {'(USD)'}
          </span>
          <button onClick={isInCart(id) ? cartNavigate : addCartHandler}>
            <GiShoppingCart /> {isInCart(id) ? 'Cart' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
