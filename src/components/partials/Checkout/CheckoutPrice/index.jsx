import EmptyText from '../../../elements/UI/EmptyText';
import cls from './checkoutPrice.module.scss';
import { useSelector } from 'react-redux';
import { mathSubTotal, mathTotal } from '../../../../utils/mathTotal';

const CheckoutPrice = () => {
  const { carts } = useSelector(state => state.cart)

  return (
    <div className={cls['checkout-price']}>
      <div
        id={cls[carts.length > 4 ? 'scrollable' : '']}
        className={cls['checkout-price__list']}
      >
        {carts.length > 0 ? carts.map(({ id, images, product_name, prices, subPrice }) => (
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
            Sub total: <span>${mathSubTotal(carts)}</span>
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
            Total: <span>${mathTotal(carts, '1', '1.5')}</span>
          </p>
          <b>${mathTotal(carts, '1', '1.5')}</b>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPrice;
