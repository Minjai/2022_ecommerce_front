import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { paths } from '../../../../constants/paths';
import cls from './checkoutDelivery.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CheckoutDelivery = () => {
  const [isDelivery, setDelivery] = useState(false);

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  const { data } = useSelector(state => state.delivery)
  const { userInfo } = useSelector(state => state.user)

  return (
    <div className={cls['delivery']}>
      <div className={cls['delivery__header']}>
        <h3>Contact Infomation</h3>
        <p>User Name: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
      </div>
      <div className={cls['delivery__body']}>
        <h3>Delivery Infomation</h3>
        <p>Name: {data?.first_name}</p>
        <p>Phone number: {data?.phone_number}</p>
        <p>Country: {data?.countryName}</p>
        <p>Postal code: {data?.zip_code}</p>
        <p>Address: {data?.address_1} {data?.city} {data?.countryName}</p>
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
