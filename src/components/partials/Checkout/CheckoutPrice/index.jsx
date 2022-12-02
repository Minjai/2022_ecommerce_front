import cls from './checkoutPrice.module.scss';

const data = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '$ 15.45',
    subPrice: '100 ea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '$ 45.45',
    subPrice: '100 ea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: '$ 76.45',
    subPrice: '100 ea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
  },
];

const CheckoutPrice = () => {
  return (
    <div className={cls['checkout-price']}>
      <div
        id={cls[data.length > 4 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {data.map(({ id, image, title, price, subPrice }) => (
          <div key={id} className={cls['checkout-price__child']}>
            <img src={image} alt="product-pic" />
            <div>
              <p>{title}</p>
              <span>{subPrice}</span>
              <p>{price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total: <span>$ 15.53</span>
          </p>
          <p>
            Shipping Free: <span>$ 1.56</span>
          </p>
        </div>
        <div className={cls['discount']}>
          <p>
            Discount: <span>- $ 1.56</span>
          </p>
        </div>
        <div className={cls['total']}>
          <p>
            Total: <span>$ 16.45</span>
          </p>
          <b>$ 16.45</b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
