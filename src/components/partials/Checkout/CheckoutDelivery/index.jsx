import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { paths } from '../../../../constants/paths';
import cls from './checkoutDelivery.module.scss';
import { useState } from 'react';

const CheckoutDelivery = () => {
  const [isDelivery, setDelivery] = useState(false);

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  return (
    <div className={cls['delivery']}>
      <div className={cls['delivery__header']}>
        <h3>Contact Infomation</h3>
        <p>User Name: Test test</p>
        <p>Email: email@gmail.com</p>
      </div>
      <div className={cls['delivery__body']}>
        <h3>Delivery Infomation</h3>
        <p>Name: Test test</p>
        <p>Phone number: test</p>
        <p>Country: test</p>
        <p>Postal code: test</p>
        <p>Address: 5501 Ball Road, Cypress</p>
      </div>
      <div className={cls['delivery__footer']}>
        <h3>Payment Method</h3>
        <span
          className={cls[isDelivery ? 'active' : '']}
          onClick={() => setDelivery((prev) => !prev)}
        >
          Bank transfer
        </span>
      </div>
      <CheckoutButtons next={nextBtnhandler} prev={backBtnHandler} />
    </div>
  );
};

export default CheckoutDelivery;
