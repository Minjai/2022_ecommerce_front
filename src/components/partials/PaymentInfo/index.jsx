import { setAlert, setAlertContent } from '../../../store/slices/alert';
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

        dispatch(setModal(false));
        dispatch(setAlert(true));
        dispatch(setAlertContent('Your order payment has been added !'));
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div className={cls['payment']}>
      <CloseButton />
      <div className={cls['payment-wrapper']}>
        {window.innerWidth < 950 && <MobileOrderNav />}
        <div className={cls['payment-info']}>
          <h2>Make a Payment</h2>
          <div className={cls['payment-info__body']}>
            <h3>Payment Information</h3>
            <p>Account Name: test</p>
            <p>Account Number: test</p>
            <p>Account Address: lorem</p>
            <p>Swift Code: Test</p>
            <p>Bank Name: Test</p>
            <p>Bank Address: Test</p>
            <p>Country / Region: Test</p>
          </div>
          <div className={cls['payment-info__footer']}>
            <p>
              • Please treanfer $ 00.00 USD ( S$ 00.00 (SGD) ) to our bank
              account for payment
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
        <CheckoutPrice data={data.order_items} />
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
