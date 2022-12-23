import { setAlert, setAlertContent } from '../../../../store/slices/alert';
import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { axiosInstance } from '../../../../constants/axios';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import MobileOrderNav from '../../MobileOrderNav';
import cls from './checkoutTransfer.module.scss';
import { mathTotal } from '../../../../utils/mathTotal';

const CheckoutTransfer = () => {
  const { backBtnHandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  const dispatch = useDispatch();

  const createOrderItems = async (data, id) => {
    try {
      const response = await axiosInstance.post(
        'orders/order_items/',
        {
          product: id,
          quantity: JSON.parse(localStorage.getItem('shop-cart')).length,
          order: data.id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
    } catch (error) {}
  };

  const createOrder = async () => {
    try {
      const response = await axiosInstance.post(
        'orders/orders/',
        {
          status: 'awaiting_payment',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      if (JSON.parse(localStorage.getItem('shop-cart')).length === 1) {
        createOrderItems(
          response.data,
          JSON.parse(localStorage.getItem('shop-cart'))[0].id
        );
      } else {
        const carts = JSON.parse(localStorage.getItem('shop-cart'));
        carts.forEach((item) => createOrderItems(response.data, item.id));
      }

      dispatch(setAlert(true));
      dispatch(setAlertContent('Your order has been added !'));
    } catch (error) {
      console.log(error.response);
    }
  };

  const { userInfo } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.cart);

  console.log(carts);

  return (
    <div className={cls['transfer']}>
      <h2 className={cls['transfer__title']}>
        Thank you for your order
        <span>
          <IoCheckmarkSharp />
        </span>
      </h2>
      <p className={cls['paragraph']}>
        Your email {userInfo.email} 으로 주문 내용이 발송되었습니다.
      </p>
      {window.innerWidth < 950 && <MobileOrderNav />}
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
          • Please treanfer $ {mathTotal(carts, '1', '1.5')} USD ( ${' '}
          {mathTotal(carts, '1', '1.5')} (SGD) ) to our bank account for payment
        </p>
        <p className={cls['active']}>
          • Bank transfer fees are the buyer’s payments.
        </p>
        <p>
          • Please upload the receipt or screenshot on the website “ My Page “ →
          “Order History” page after deposit.
        </p>
      </div>
      <CheckoutButtons next={createOrder} prev={backBtnHandler} />
    </div>
  );
};

export default CheckoutTransfer;
