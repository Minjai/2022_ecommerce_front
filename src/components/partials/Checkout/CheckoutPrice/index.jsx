import {
  mathModalTotal,
  mathSubTotal,
  mathTotal,
} from '../../../../utils/mathTotal';
import { mathCurrency, mathShipping } from '../../../../utils/mathCurrency';
import EmptyText from '../../../elements/UI/EmptyText';
import cls from './checkoutPrice.module.scss';
import { useSelector } from 'react-redux';

const CheckoutPrice = ({ data, isOrder = false }) => {
  const { points } = useSelector((state) => state.points);

  const { activeCurrency } = useSelector((state) => state.currency);

  return isOrder ? (
    <div className={cls['checkout-price']}>
      <div
        id={cls[data?.order_items.length > 3 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {data?.order_items.length > 0 ? (
          data?.order_items.map(({ id, quantity, product }) => {
            return (
              <div key={id} className={cls['checkout-price__child']}>
                <img
                  src={
                    product.images?.find((item) => item.is_feature === true)
                      ?.image
                  }
                  alt="product-pic"
                />
                <div>
                  <p>{product.product_name}</p>
                  <span>{quantity?.package}</span>
                  <p>
                    {activeCurrency?.currency_value}{' '}
                    {mathCurrency(
                      quantity?.selling_price,
                      activeCurrency?.currency_price
                    )}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyText text={'checkout'} />
        )}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total:{' '}
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathSubTotal(activeCurrency, data?.order_items)?.toFixed(2)}
            </span>
          </p>
          <p>
            Shipping Fee:{' '}
            <span>
              {data?.shipping_fee > 0
                ? `${activeCurrency?.currency_value} ${mathShipping(
                    data?.shipping_fee,
                    +activeCurrency?.currency_price
                  )?.toFixed(2)}`
                : `${activeCurrency?.currency_value} 0`}
            </span>
          </p>
        </div>
        {data?.point_used ? (
          <div className={cls['discount']}>
            <p>
              Discount:{' '}
              <span>
                - {activeCurrency?.currency_value}{' '}
                {mathCurrency(
                  data?.point_used / 1000,
                  activeCurrency?.currency_price
                )}
              </span>
            </p>
          </div>
        ) : null}
        <div className={cls['total']}>
          <p>
            Total:{' '}
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathModalTotal(
                activeCurrency,
                data?.order_items,
                +mathShipping(data?.shipping_fee, +activeCurrency?.currency_price),
                data?.point_used
              )?.toFixed(2)}
            </span>
          </p>
          <b>
            {activeCurrency?.currency_value}{' '}
            {mathModalTotal(
              activeCurrency,
              data?.order_items,
              +mathShipping(data?.shipping_fee, +activeCurrency?.currency_price),
              data?.point_used
            )?.toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  ) : (
    <div className={cls['checkout-price']}>
      <div
        id={cls[data?.length > 5 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {data?.length > 0 ? (
          data?.map(({ id, images, product_name, pickedPackage, prices }) => {
            return (
              <div key={id} className={cls['checkout-price__child']}>
                <img
                  src={images?.find((item) => item.is_feature === true)?.image}
                  alt="product-pic"
                />
                <div>
                  <p>{product_name}</p>
                  <span>
                    {pickedPackage
                      ? pickedPackage?.package
                      : prices[0]?.package}
                  </span>
                  <p>
                    {mathCurrency(
                      pickedPackage?.selling_price,
                      activeCurrency?.currency_price
                    )}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyText text={'checkout'} />
        )}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total:{' '}
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathSubTotal(activeCurrency, data)?.toFixed(2)}
            </span>
          </p>
          <p>
            Shipping Fee:{' '}
            <span>
              {data?.length > 0
                ? `${activeCurrency?.currency_value} ${mathShipping(
                    data,
                    +activeCurrency?.currency_price
                  )}`
                : `${activeCurrency?.currency_value} 0`}
            </span>
          </p>
        </div>
        {points ? (
          <div className={cls['discount']}>
            <p>
              Discount:{' '}
              <span>
                - {activeCurrency?.currency_value}{' '}
                {mathCurrency(points / 1000, activeCurrency?.currency_price)}
              </span>
            </p>
          </div>
        ) : null}
        <div className={cls['total']}>
          <p>
            Total:{' '}
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathTotal(
                activeCurrency,
                data,
                +mathShipping(data, +activeCurrency?.currency_price),
                points
              )?.toFixed(2)}
            </span>
          </p>
          <b>
            {activeCurrency?.currency_value}{' '}
            {mathTotal(
              activeCurrency,
              data,
              +mathShipping(data, +activeCurrency?.currency_price),
              points
            )?.toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
