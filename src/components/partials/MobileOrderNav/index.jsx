import { decrementStatisPoints, setPoints } from '../../../store/slices/points';
import {
  mathModalTotal,
  mathSubTotal,
  mathTotal,
} from '../../../utils/mathTotal';
import { mathCurrency } from '../../../utils/mathCurrency';
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
  const { singleOrder } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const pointsHandler = () => {
    if (discount <= staticPoints) {
      dispatch(decrementStatisPoints(discount));
      dispatch(setPoints(discount));
      setDiscount('');
    }
  };

  const { activeCurrency } = useSelector((state) => state.currency);

  return isOrder ? (
    <div id={cls[active ? 'active' : '']} className={cls['order']}>
      <div className={cls['order-wrapper']}></div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cls['order-header']}
      >
        <span>Order Detail</span>
        <span>
          {activeCurrency?.currency_value}{' '}
          {mathModalTotal(
            activeCurrency,
            data?.order_items,
            activeCurrency?.currency_price,
            data?.point_used
          )?.toFixed(2)}{' '}
          <AiOutlineDown />
        </span>
      </div>
      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          {data?.order_items.length > 0 ? (
            data?.order_items.map(({ id, product, quantity }) => {
              return (
                <div key={id} className={cls['order-body-list__child']}>
                  <img
                    src={
                      product?.images.find((item) => item.is_feature === true)
                        .image
                    }
                    alt="order-product-pic"
                  />
                  <div>
                    <span>
                      <p>{product?.product_name}</p>
                      <b>{quantity?.package}</b>
                    </span>
                    <h5>
                      {activeCurrency?.currency_value}{' '}
                      {mathCurrency(
                        quantity?.selling_price,
                        activeCurrency?.currency_price
                      )}
                    </h5>
                  </div>
                </div>
              );
            })
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
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathSubTotal(activeCurrency, data.order_items)?.toFixed(2)}
            </span>
          </div>
          <div>
            <span>Shipping Fee:</span>
            <span>
              {activeCurrency?.currency_value}{' '}
              {activeCurrency?.currency_price?.toFixed(2)}
            </span>
          </div>
          {data?.point_used ? (
            <div className={cls['discount']}>
              <span>Discount:</span>
              <span>
                {activeCurrency?.currency_value}{' '}
                {mathCurrency(
                  data?.point_used / 1000,
                  activeCurrency?.currency_price
                )}
              </span>
            </div>
          ) : null}
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>
            {activeCurrency?.currency_value}{' '}
            {mathModalTotal(
              activeCurrency,
              data?.order_items,
              activeCurrency?.currency_price,
              data?.point_used
            )?.toFixed(2)}
          </span>
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
          {activeCurrency?.currency_value}{' '}
          {mathTotal(
            activeCurrency,
            singleOrder?.length ? singleOrder : carts,
            activeCurrency?.currency_price,
            points
          )?.toFixed(2)}{' '}
          <AiOutlineDown />
        </span>
      </div>

      <div className={cls['order-body']}>
        <div className={cls['order-body-list']}>
          {singleOrder?.length ? (
            singleOrder?.map(
              ({ id, product_name, pickedPackage, images, prices }) => {
                const finalPrice = prices?.find(
                  (elem) =>
                    elem?.currency?.currency === activeCurrency?.currency &&
                    elem?.package === pickedPackage?.package
                );

                return (
                  <div key={id} className={cls['order-body-list__child']}>
                    <img
                      src={
                        images.find((item) => item.is_feature === true).image
                      }
                      alt="order-product-pic"
                    />
                    <div>
                      <span>
                        <p>{product_name}</p>
                        <b>{pickedPackage.package}</b>
                      </span>
                      <h5>
                        {activeCurrency?.currency_value}{' '}
                        {finalPrice?.selling_price}
                      </h5>
                    </div>
                  </div>
                );
              }
            )
          ) : carts?.length > 0 ? (
            carts.map(({ id, product_name, pickedPackage, images }) => {
              return (
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
                    <h5>
                      {activeCurrency?.currency_value}{' '}
                      {mathCurrency(
                        pickedPackage?.selling_price,
                        activeCurrency?.currency_price
                      )}
                    </h5>
                  </div>
                </div>
              );
            })
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
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathSubTotal(
                activeCurrency,
                singleOrder?.length ? singleOrder : carts
              )?.toFixed(2)}
            </span>
          </div>
          <div>
            <span>Shipping Fee:</span>
            <span>
              {activeCurrency?.currency_value}{' '}
              {(activeCurrency?.currency_price).toFixed(2)}
            </span>
          </div>
          {points ? (
            <div className={cls['discount']}>
              <span>Discount:</span>
              <span>
                {activeCurrency?.currency_value}{' '}
                {mathCurrency(points / 1000, activeCurrency?.currency_price)}
              </span>
            </div>
          ) : null}
        </div>
        <div className={cls['order-body-total']}>
          <span>Total:</span>
          <span>
            {activeCurrency?.currency_value}{' '}
            {mathTotal(
              activeCurrency,
              singleOrder?.length ? singleOrder : carts,
              activeCurrency?.currency_price,
              points
            )?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderNav;
