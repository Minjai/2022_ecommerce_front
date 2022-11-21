import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import cls from './checkoutTransfer.module.scss';

const CheckoutTransfer = () => {
  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  return (
    <div className={cls['transfer']}>
      <h2 className={cls['transfer__title']}>
        Thank you for your order
        <span>
          <IoCheckmarkSharp />
        </span>
      </h2>
      <p>Your email test@gmail.com 으로 주문 내용이 발송되었습니다.</p>
      <div className={cls['transfer__body']}>
        <h3>Payment Information</h3>
        <p>Account Name: test</p>
        <p>Account Number: test</p>
        <p>Account Address: lorem</p>
        <p>Swift Code: Test</p>
        <p>Bank Name: Test</p>
        <p>Bank Address: Test</p>
        <p>Country / Region: Test</p>
      </div>
      <div className={cls['transfer__footer']}>
        <p>
          • Please treanfer $ 00.00 USD ( S$ 00.00 (SGD) ) to our bank account
          for payment
        </p>
        <p className={cls['active']}>
          • Bank transfer fees are the buyer’s payments.
        </p>
        <p>
          • Please upload the receipt or screenshot on the website “ My Page “ →
          “Order History” page after deposit.
        </p>
      </div>
      <CheckoutButtons next={nextBtnhandler} prev={backBtnHandler} />
    </div>
  );
};

export default CheckoutTransfer;
