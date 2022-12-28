import { mathSubTotal, mathTotal } from '../../../../utils/mathTotal';
import EmptyText from '../../../elements/UI/EmptyText';
import cls from './checkoutPrice.module.scss';
import { useSelector } from 'react-redux';

const CheckoutPrice = ({ data, isOrder = false }) => {
  const { points } = useSelector((state) => state.points);

  return isOrder ? (
    <div className={cls['checkout-price']}>
      <div
        id={cls[data?.order_items.length > 3 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {data?.order_items.length > 0 ? (
          data?.order_items.map(({ id, quantity, product }) => (
            <div key={id} className={cls['checkout-price__child']}>
              <img
                src={
                  product.images?.find((item) => item.is_feature === true).image
                }
                alt="product-pic"
              />
              <div>
                <p>{product.product_name}</p>
                <span>{quantity?.package}</span>
                <p>$ {quantity?.selling_price}</p>
              </div>
            </div>
          ))
        ) : (
          <EmptyText text={'checkout'} />
        )}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total: <span>$ {mathSubTotal(data?.order_items)}</span>
          </p>
          <p>
            Shipping Fee: <span>$ 1</span>
          </p>
        </div>
        {data?.point_used ? (
          <div className={cls['discount']}>
            <p>
              Discount: <span>- $ {data?.point_used / 1000}</span>
            </p>
          </div>
        ) : null}
        <div className={cls['total']}>
          <p>
            Total:{' '}
            <span>$ {mathTotal(data?.order_items, '1', data?.point_used)}</span>
          </p>
          <b>$ {mathTotal(data?.order_items, '1', data?.point_used)}</b>
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
          data?.map(({ id, images, product_name, pickedPackage, prices }) => (
            <div key={id} className={cls['checkout-price__child']}>
              <img
                src={images?.find((item) => item.is_feature === true).image}
                alt="product-pic"
              />
              <div>
                <p>{product_name}</p>
                <span>
                  {pickedPackage ? pickedPackage?.package : prices[0]?.package}
                </span>
                <p>
                  ${' '}
                  {pickedPackage
                    ? pickedPackage?.selling_price
                    : prices[0]?.selling_price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <EmptyText text={'checkout'} />
        )}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total: <span>$ {mathSubTotal(data)}</span>
          </p>
          <p>
            Shipping Fee: <span>$ 1</span>
          </p>
        </div>
        {points ? (
          <div className={cls['discount']}>
            <p>
              Discount: <span>- $ {points / 1000}</span>
            </p>
          </div>
        ) : null}
        <div className={cls['total']}>
          <p>
            Total: <span>$ {mathTotal(data, '1', points)}</span>
          </p>
          <b>$ {mathTotal(data, '1', points)}</b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
