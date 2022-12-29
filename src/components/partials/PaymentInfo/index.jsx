import { useGetPaymentInfoQuery } from '../../../store/query/paymentQuery';
import { setAlert, setAlertContent } from '../../../store/slices/alert';
import { mathModalTotal } from '../../../utils/mathTotal';
import { axiosInstance } from '../../../constants/axios';
import CloseButton from '../../elements/UI/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../store/slices/modal';
import CheckoutPrice from '../Checkout/CheckoutPrice';
import MobileOrderNav from '../MobileOrderNav';
import cls from './payment.module.scss';
import { useState } from 'react';

const PaymentInfo = () => {
  const [file, setFile] = useState(null);

  const { data } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(setAlertContent('Your order payment has been added !'));
    dispatch(setModal(false));
    dispatch(setAlert(true));
  };

  const postPaymentHandler = async () => {
    const formData = new FormData();

    formData.append('payment_order_photo', file);
    formData.append('status', 'confirming_payment');

    if (file) {
      try {
        const response = await axiosInstance.patch(
          `orders/orders/${data.id}/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Content-type': 'multipart/form-data',
            },
          }
        );

        modalHandler();
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const { data: paymentData } = useGetPaymentInfoQuery({
    token: localStorage.getItem('accessToken'),
  });

  const { activeCurrency } = useSelector((state) => state.currency);

  return (
    <div className={cls['payment']}>
      <CloseButton />
      <div className={cls['payment-wrapper']}>
        <div className={cls['payment-info']}>
          <h2>Make a Payment</h2>
          {window.innerWidth < 950 && <h5>Please upload a payment here.</h5>}
          {window.innerWidth < 950 && <MobileOrderNav isOrder={true} />}
          <div className={cls['payment-info__body']}>
            <h3>Payment Information</h3>
            <p>Account Name: {paymentData?.results[0].account_name}</p>
            <p>Account Number: {paymentData?.results[0].account_number}</p>
            <p>Account Address: {paymentData?.results[0].account_address}</p>
            <p>Swift Code: {paymentData?.results[0].swift_code}</p>
            <p>Bank Name: {paymentData?.results[0].bank_name}</p>
            <p>Bank Address: {paymentData?.results[0].bank_address}</p>
            <p>Country / Region: {paymentData?.results[0].county_region}</p>
          </div>
          <div className={cls['payment-info__footer']}>
            <p>
              • Please treanfer ${' '}
              {mathModalTotal(activeCurrency, data?.order_items, 1, data?.point_used)} USD ( ${' '}
              {mathModalTotal(activeCurrency, data?.order_items, 1, data?.point_used)} (SGD) )
              to our bank account for payment
            </p>
            <p className={cls['active']}>
              • Bank transfer fees are the buyer’s payments.
            </p>
            <p>
              Please upload a payment here.
              <label className={cls['input-file']}>
                <input
                  accept="image/png, image/jpeg"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  name="file"
                />
                <span className={cls['input-file-btn']}>Select a file</span>
                <span className={cls['input-file-text']}>
                  {file ? file.name : 'File is not selected yet'}
                </span>
              </label>
            </p>
          </div>
        </div>
        <CheckoutPrice isOrder={true} data={data} />
      </div>
      <div className={cls['payment-buttons']}>
        <button onClick={() => dispatch(setModal(false))}>Cancel</button>
        <button onClick={postPaymentHandler} className={cls['active']}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
