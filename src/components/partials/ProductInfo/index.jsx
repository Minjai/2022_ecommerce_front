import ProductImages from '../../elements/ProductImages';
import PackageList from '../../lists/PackageList';
import { FiChevronDown } from 'react-icons/fi';
import cls from './productInfo.module.scss';
import { useState } from 'react';

const images = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  },
  {
    id: 2,
    image:
      'http://cdn.playbuzz.com/cdn/925704be-9b8e-4dfc-852e-f24d720cb9c5/bcf39e88-5731-43bb-9d4b-e5b3b2b1fdf2.jpg',
  },
  {
    id: 3,
    image:
      'https://static7.depositphotos.com/1004998/737/i/950/depositphotos_7371112-stock-photo-beautiful-nature.jpg',
  },
  {
    id: 4,
    image:
      'https://st4.depositphotos.com/1105977/30872/i/1600/depositphotos_308727128-stock-photo-plitvice-lakes-national-park-with.jpg',
  },
];

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

const ProductInfo = () => {
  const [active, setActive] = useState(false);
  const [method, setMethod] = useState('');

  const methodHandler = (str) => {
    setMethod(str)
    setActive(false)
  }

  return (
    <div className={cls['product']}>
      <ProductImages images={images} />
      <div className={cls['product-info']}>
        <h4>Test Test Test Test</h4>
        <p>
          $ 20.50 (USD) <b>*Out of Stock</b>
        </p>
        <span>Manufactured By TEST</span>
        <span>Contains TEST</span>
        <PackageList list={list} />
        <div className={cls['product-info__footer']}>
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
          <button className={cls['cart-btn']}>Add to Cart</button>
          <button>Purchase now</button>
          <h5>*This product is out of stock</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
