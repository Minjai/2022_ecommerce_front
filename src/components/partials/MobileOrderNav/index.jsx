import { decrementStatisPoints, setPoints } from '../../../store/slices/points';
import { mathSubTotal, mathTotal } from '../../../utils/mathTotal';
import { useDispatch, useSelector } from 'react-redux';
import EmptyText from '../../elements/UI/EmptyText';
import { AiOutlineDown } from 'react-icons/ai';
import cls from './mobileOrder.module.scss';
import { useState } from 'react';

const MobileOrderNav = ({ applyPoints = false, isOrder = false }) => {
  const { points, staticPoints } = useSelector((state) => state.points);
  const { carts } = useSelector((state) => state.cart);
  const [active, setActive] = useState(false);
  const [discount, setDiscount] = useState('');
  const { data } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const pointsHandler = () => {
    if (discount <= staticPoints) {
      dispatch(decrementStatisPoints(discount));
      dispatch(setPoints(discount));
      setDiscount('');
    }
  };

  return isOrder ? (
    <div id={cls[active ? 'active' : '']} className={cls['order']}>
      <div className={cls['order-wrapper']}></div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cls['order-header']}
      >
        <span>Order Detail</span>
        <span>
          $ {mathTotal(data?.order_items, '1', data?.point_used)} <AiOutlineDown />
        </span>
      </div>
      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          {data?.order_items.length > 0 ? (
            data?.order_items.map(({ id, product, quantity, }) => (
              <div key={id} className={cls['order-body-list__child']}>
                <img
                  src={product?.images.find((item) => item.is_feature === true).image}
                  alt="order-product-pic"
                />
                <div>
                  <span>
                    <p>{product?.product_name}</p>
                    <b>{quantity.package}</b>
                  </span>
                  <h5>$ {quantity.selling_price}</h5>
                </div>
              </div>
            ))
          ) : (
            <EmptyText text={'order'} />
          )}
        </div>
        {applyPoints && (
          <div className={cls['order-body-points']}>
            <h4>Apply Points</h4>

            <div>
              <span>You have {staticPoints} points available.</span>
              <input
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                type="text"
              />
              <button onClick={pointsHandler}>Apply Points</button>
            </div>
          </div>
        )}
        <div className={cls['order-body-subtotal']}>
          <div>
            <span>Sub total:</span>
            <span>${mathSubTotal(data.order_items)}</span>
          </div>
          <div>
            <span>Shipping Fee:</span>
            <span>$1</span>
          </div>
          {data?.point_used ? (
            <div className={cls['discount']}>
              <span>Discount:</span>
              <span>$ {data?.point_used / 1000}</span>
            </div>
          ) : null}
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>${mathTotal(data?.order_items, '1', data?.point_used)}</span>
        </div>
      </div>
    </div>
  ) : (
    <div id={cls[active ? 'active' : '']} className={cls['order']}>
      <div className={cls['order-wrapper']}></div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cls['order-header']}
      >
        <span>Order Detail</span>
        <span>
          ${mathSubTotal(carts, 1, points)} <AiOutlineDown />
        </span>
      </div>
      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          {carts.length > 0 ? (
            carts.map(({ id, product_name, pickedPackage, images }) => (
              <div key={id} className={cls['order-body-list__child']}>
                <img
                  src={images.find((item) => item.is_feature === true).image}
                  alt="order-product-pic"
                />
                <div>
                  <span>
                    <p>{product_name}</p>
                    <b>{pickedPackage.package}</b>
                  </span>
                  <h5>$ {pickedPackage.selling_price}</h5>
                </div>
              </div>
            ))
          ) : (
            <EmptyText text={'order'} />
          )}
        </div>
        {applyPoints && (
          <div className={cls['order-body-points']}>
            <h4>Apply Points</h4>

            <div>
              <span>You have {staticPoints} points available.</span>
              <input
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                type="text"
              />
              <button onClick={pointsHandler}>Apply Points</button>
            </div>
          </div>
        )}
        <div className={cls['order-body-subtotal']}>
          <div>
            <span>Sub total:</span>
            <span>${mathSubTotal(carts)}</span>
          </div>
          <div>
            <span>Shipping Fee:</span>
            <span>$1</span>
          </div>
          {points ? (
            <div className={cls['discount']}>
              <span>Discount:</span>
              <span>$ {points / 1000}</span>
            </div>
          ) : null}
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>${mathTotal(carts, '1', points)}</span>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderNav;
