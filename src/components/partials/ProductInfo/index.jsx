import ProductImages from '../../elements/ProductImages';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../store/slices/cart';
import PackageList from '../../lists/PackageList';
import { paths } from '../../../constants/paths';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import cls from './productInfo.module.scss';
import { useState } from 'react';

const list = [
  {
    id: 1,
    isPicked: false,
    value: '10ea',
    previousPrice: '14.50',
    currentPrice: '20.50',
  },
  {
    id: 2,
    isPicked: true,
    value: '10ea',
    previousPrice: '14.50',
    currentPrice: '20.50',
  },
  {
    id: 3,
    isPicked: false,
    value: '10ea',
    previousPrice: '14.50',
    currentPrice: '20.50',
  },
];

const ProductInfo = ({ data }) => {
  const { carts } = useSelector((state) => state.cart);
  const [active, setActive] = useState(false);
  const [method, setMethod] = useState('');

  const methodHandler = (str) => {
    setMethod(str);
    setActive(false);
  };

  const { status, prices, id, product_name } = data;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = (id) => {
    return carts?.find((item) => item.id === id);
  };

  const cartNavigate = () => {
    navigate(`/${paths.CART}`);
    window.scrollTo(window.scrollX, 0);
  };

  const addCartHandler = () => {
    dispatch(addCart(data));
    const cart = JSON.parse(localStorage.getItem("shop-cart"));
    localStorage.setItem('shop-cart',  JSON.stringify([...cart, data]))
  };

  return (
    <div className={cls['product']}>
      <ProductImages images={data?.images} />
      <div className={cls['product-info']}>
        <h4>{product_name}</h4>
        <p>
          $ {prices[0]?.selling_price} (USD){' '}
          {status === 'out_of_stock' && <b>*{status}</b>}
        </p>
        <span>Manufactured By TEST</span>
        <span>Contains TEST</span>
        <PackageList list={list} />
        <div className={cls['product-info__footer']}>
          <div>
            <h4>Shipping Method</h4>
            <div
              id={cls[active ? 'active' : '']}
              className={cls['product-info__footer__list']}
            >
              <span onClick={() => setActive((prev) => !prev)}>
                <p>Free (7 - 14 Business Days)</p>
                <FiChevronDown />
              </span>
              <ul>
                <li onClick={() => methodHandler('react')}>React</li>
                <li onClick={() => methodHandler('react')}>React</li>
              </ul>
            </div>
          </div>
          <button
            className={cls['cart-btn']}
            onClick={isInCart(id) ? cartNavigate : addCartHandler}
          >
            {isInCart(id) ? 'Cart' : 'Add to Cart'}
          </button>
          <button>Purchase now</button>
          {status === 'out_of_stock' && <h5>*This product is out of stock</h5>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
