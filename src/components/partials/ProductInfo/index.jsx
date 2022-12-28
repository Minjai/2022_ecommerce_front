import ProductImages from '../../elements/ProductImages';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../store/slices/cart';
import PackageList from '../../lists/PackageList';
import { paths } from '../../../constants/paths';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import cls from './productInfo.module.scss';
import { useEffect, useState } from 'react';

const ProductInfo = ({ data }) => {
  const [method, setMethod] = useState('Shipping method');
  const { carts } = useSelector((state) => state.cart);
  const [pricePackage, setPricePackage] = useState('');
  const [active, setActive] = useState(false);

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
    dispatch(addCart({ ...data, pickedPackage: pricePackage }));
    const cart = JSON.parse(localStorage.getItem('shop-cart'));
    localStorage.setItem(
      'shop-cart',
      JSON.stringify([...cart, { ...data, pickedPackage: pricePackage }])
    );
  };

  useEffect(() => {
    setPricePackage(prices[0]);
  }, [prices]);

  const options = {
    pricePackage,
    setPricePackage,
  };

  return (
    <div className={cls['product']}>
      <ProductImages images={data?.images} />
      <div className={cls['product-info']}>
        <h4>{product_name}</h4>
        <p>
          $ {prices[0]?.selling_price} (USD){' '}
          {status === 'out_of_stock' && <b>*Out of Stock</b>}
        </p>
        <span>Manufactured By TEST</span>
        <span>Contains TEST</span>
        <PackageList options={options} list={prices} />
        <div className={cls['product-info__footer']}>
          <div>
            <h4>Shipping Method</h4>
            <div
              id={cls[active ? 'active' : '']}
              className={cls['product-info__footer__list']}
            >
              <span onClick={() => setActive((prev) => !prev)}>
                <p>{method}</p>
                <FiChevronDown />
              </span>
              <ul>
                {data.shipping_method.length > 0 &&
                  data.shipping_method.map(({ title, id }) => (
                    <li key={id} onClick={() => methodHandler(title)}>
                      {title}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <button
            className={cls['cart-btn']}
            onClick={isInCart(id) ? cartNavigate : addCartHandler}
          >
            {isInCart(id) ? 'Cart' : 'Add to Cart'}
          </button>
          <button id={cls[status === 'out_of_stock' ? 'outOfStock' : '']}>
            Purchase now
          </button>
          {status === 'out_of_stock' && <h5>*This product is out of stock</h5>}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
