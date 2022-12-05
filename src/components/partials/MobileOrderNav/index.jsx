import { AiOutlineDown } from 'react-icons/ai';
import cls from './mobileOrder.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { mathSubTotal, mathTotal } from '../../../utils/mathTotal';
import EmptyText from '../../elements/UI/EmptyText';

const MobileOrderNav = () => {
  const { carts } = useSelector((state) => state.cart);
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
          ${mathSubTotal(carts)} <AiOutlineDown />
        </span>
      </div>
      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          {carts.length > 0 ? (
            carts.map(({ id, product_name, prices, images }) => (
              <div key={id} className={cls['order-body-list__child']}>
                <img
                  src={images.find(item => item.is_feature === true).image}
                  alt="order-product-pic"
                />
                <div>
                  <span>
                    <p>{product_name}</p>
                    <b>100 ea</b>
                  </span>
                  <h5>${prices[0].selling_price}</h5>
                </div>
              </div>
            ))
          ) : (
            <EmptyText text={'order'}/>
          )}
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
            <span>${mathSubTotal(carts)}</span>
          </div>
          <div>
            <span>Shipping Free:</span>
            <span>$1.45</span>
          </div>
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>${mathTotal(carts, '1.45')}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderNav;
