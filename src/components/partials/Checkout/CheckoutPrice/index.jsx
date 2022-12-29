import {
  mathModalTotal,
  mathSubTotal,
  mathTotal,
} from '../../../../utils/mathTotal';
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
            const finalPrice = product?.prices?.find(
              (elem) =>
                elem?.currency?.currency === activeCurrency?.currency &&
                elem?.package === quantity?.package
            );

            return (
              <div key={id} className={cls['checkout-price__child']}>
                <img
                  src={
                    product.images?.find((item) => item.is_feature === true)
                      .image
                  }
                  alt="product-pic"
                />
                <div>
                  <p>{product.product_name}</p>
                  <span>{quantity?.package}</span>
                  <p>
                    {activeCurrency?.currency_value} {finalPrice?.selling_price}
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
              {mathSubTotal(activeCurrency, data?.order_items)}
            </span>
          </p>
          <p>
            Shipping Fee: <span>$ 1</span>
          </p>
        </div>
        {data?.point_used ? (
          <div className={cls['discount']}>
            <p>
              Discount:{' '}
              <span>
                - {activeCurrency?.currency_value} {data?.point_used / 1000}
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
                1,
                data?.point_used
              )}
            </span>
          </p>
          <b>
            {activeCurrency?.currency_value}{' '}
            {mathModalTotal(
              activeCurrency,
              data?.order_items,
              1,
              data?.point_used
            )}
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
            const finalPrice = prices?.find(
              (item) =>
                item?.currency?.currency === activeCurrency?.currency &&
                item?.package === pickedPackage?.package
            );

            return (
              <div key={id} className={cls['checkout-price__child']}>
                <img
                  src={images?.find((item) => item.is_feature === true).image}
                  alt="product-pic"
                />
                <div>
                  <p>{product_name}</p>
                  <span>
                    {pickedPackage
                      ? pickedPackage?.package
                      : prices[0]?.package}
                  </span>
                  <p>{finalPrice?.selling_price}</p>
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
              {mathSubTotal(activeCurrency, data)}
            </span>
          </p>
          <p>
            Shipping Fee: <span>$ 1</span>
          </p>
        </div>
        {points ? (
          <div className={cls['discount']}>
            <p>
              Discount:{' '}
              <span>
                - {activeCurrency?.currency_value} {points / 1000}
              </span>
            </p>
          </div>
        ) : null}
        <div className={cls['total']}>
          <p>
            Total:{' '}
            <span>
              {activeCurrency?.currency_value}{' '}
              {mathTotal(activeCurrency, data, 1, points)}
            </span>
          </p>
          <b>
            {activeCurrency?.currency_value}{' '}
            {mathTotal(activeCurrency, data, 1, points)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
