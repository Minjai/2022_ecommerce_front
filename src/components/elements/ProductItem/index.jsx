import { GiShoppingCart } from 'react-icons/gi';
import cls from './productItem.module.scss';
import Rating from '../UI/Rating';

const ProductItem = ({ item }) => {
  const { title, image, price, rating, category, top } = item;
  
  return (
    <div className={cls['product-item']}>
      <div className={cls['product-item__header']}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt="product-pic"
        />
        {top && (
          <span>
            No. <p>{top}</p>{' '}
          </span>
        )}  
      </div>
      <div className={cls['product-item__body']}>
        <span>{category}</span>
        <p>{title}</p>
        <Rating productRating={rating} />
        <div className={cls['product-item__body__price']}>
          <span>
            ${price} {'(USD)'}
          </span>
          <button>
            <GiShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
