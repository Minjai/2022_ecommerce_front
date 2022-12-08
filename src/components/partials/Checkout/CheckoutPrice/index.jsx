import { mathSubTotal, mathTotal } from '../../../../utils/mathTotal';
import EmptyText from '../../../elements/UI/EmptyText';
import cls from './checkoutPrice.module.scss';

const CheckoutPrice = ({ data }) => {
  return (
    <div className={cls['checkout-price']}>
      <div
        id={cls[data?.length > 2 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {data?.length > 0 ? data.map(({ id, images, product_name, prices, subPrice }) => (
          <div key={id} className={cls['checkout-price__child']}>
            <img src={images?.find(item => item.is_feature === true).image} alt="product-pic" />
            <div>
              <p>{product_name}</p>
              <span>100ea</span>
              <p>${prices?.length && prices[0]?.selling_price}</p>
            </div>
          </div>
        )) : <EmptyText text={'checkout'}/>}
      </div>
      <div className={cls['checkout-price__total']}>
        <div>
          <p>
            Sub total: <span>${mathSubTotal(data)}</span>
          </p>
          <p>
            Shipping Free: <span>$ 1</span>
          </p>
        </div>
        <div className={cls['discount']}>
          <p>
            Discount: <span>- $ 1.5</span>
          </p>
        </div>
        <div className={cls['total']}>
          <p>
            Total: <span>${mathTotal(data, '1', '1.5')}</span>
          </p>
          <b>${mathTotal(data, '1', '1.5')}</b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
