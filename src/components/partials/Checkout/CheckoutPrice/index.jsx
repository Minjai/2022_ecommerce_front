import cls from './checkoutPrice.module.scss';

const CheckoutPrice = () => {
  return (
    <div className={cls['checkout-price']}>
      <div className={cls['checkout-price__list']}>
        <div className={cls['checkout-price__child']}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
            alt="product-pic"
          />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <span>100 ea</span>
            <p>$ 15.43</p>
          </div>
        </div>
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
