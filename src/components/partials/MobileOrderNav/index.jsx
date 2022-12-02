import { AiOutlineDown } from 'react-icons/ai';
import cls from './mobileOrder.module.scss';
import { useState } from 'react';

const MobileOrderNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div id={cls[active ? 'active' : '']} className={cls['order']}>
      <div className={cls['order-wrapper']}></div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cls['order-header']}
      >
        <span>Order Detail</span>
        <span>
          $15.36 <AiOutlineDown />
        </span>
      </div>
      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          <div className={cls['order-body-list__child']}>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
              alt="order-product-pic"
            />
            <div>
              <span>
                <p>Lorem ipsum dolor sit amet.</p>
                <b>100 ea</b>
              </span>
              <h5>$14.56</h5>
            </div>
          </div>
          <div className={cls['order-body-list__child']}>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
              alt="order-product-pic"
            />
            <div>
              <span>
                <p>Lorem ipsum dolor sit amet.</p>
                <b>100 ea</b>
              </span>
              <h5>$14.56</h5>
            </div>
          </div>
        </div>
        <div className={cls['order-body-points']}>
          <h4>Apply Points</h4>

          <div>
            <span>You have 5,000 points available.</span>
            <input type="text" />
            <button>Apply Points</button>
          </div>
        </div>
        <div className={cls['order-body-subtotal']}>
          <div>
            <span>Sub total:</span>
            <span>$15.56</span>
          </div>
          <div>
            <span>Shipping Free:</span>
            <span>$1.45</span>
          </div>
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>$18.56</span>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderNav;
