import { useGetPaymentInfoQuery } from '../../../../store/query/paymentQuery';
import { useGetUserPointsQuery } from '../../../../store/query/pointsQuery';
import { setAlert, setAlertContent } from '../../../../store/slices/alert';
import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { setDiscountPoints } from '../../../../store/slices/points';
import { axiosInstance } from '../../../../constants/axios';
import { mathTotal } from '../../../../utils/mathTotal';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import MobileOrderNav from '../../MobileOrderNav';
import cls from './checkoutTransfer.module.scss';

const CheckoutTransfer = () => {
  const { backBtnHandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  const dispatch = useDispatch();

  const { conditionId } = useSelector((state) => state.order);
  const { data: deliveryData } = useSelector((state) => state.delivery);
  const { points, staticPoints } = useSelector((state) => state.points);

  const createOrderItems = async (data, item) => {
    try {
      const response = await axiosInstance.post(
        'orders/order_items/',
        {
          product: item.id,
          quantity: item.pickedPackage.id,
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

  const decrementUserPoints = async () => {
    try {
      const response = await axiosInstance.patch(
        `accounts/points/${pointsData.results[0].id}/`,
        {
          point: staticPoints,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      dispatch(setDiscountPoints(0))
    } catch (error) {}
  };

  const createOrder = async () => {
    try {
      const response = await axiosInstance.post(
        'orders/orders/',
        {
          status: 'awaiting_payment',
          medical_condition: conditionId,
          delivery_address: deliveryData.id,
          point_used: +points,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      if (JSON.parse(localStorage.getItem('shop-cart')).length === 1) {
        const carts = JSON.parse(localStorage.getItem('shop-cart'));
        createOrderItems(response.data, carts[0]);
      } else {
        const carts = JSON.parse(localStorage.getItem('shop-cart'));
        carts.forEach((item) => createOrderItems(response.data, item));
      }

      decrementUserPoints();
      dispatch(setAlert(true));
      dispatch(setAlertContent('Your order has been added !'));
    } catch (error) {
      console.log(error.response);
    }
  };

  const { data } = useGetPaymentInfoQuery({
    token: localStorage.getItem('accessToken'),
  });

  const { userInfo } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.cart);

  const { data: pointsData } = useGetUserPointsQuery({
    userId: userInfo.id,
    token: localStorage.getItem('accessToken'),
  });

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
      {window.innerWidth < 950 && <MobileOrderNav applyPoints={true} />}
      <div className={cls['transfer__body']}>
        <h3>Payment Information</h3>
        <p>Account Name: {data?.results[0].account_name}</p>
        <p>Account Number: {data?.results[0].account_number}</p>
        <p>Account Address: {data?.results[0].account_address}</p>
        <p>Swift Code: {data?.results[0].swift_code}</p>
        <p>Bank Name: {data?.results[0].bank_name}</p>
        <p>Bank Address: {data?.results[0].bank_address}</p>
        <p>Country / Region: {data?.results[0].county_region}</p>
      </div>
      <div className={cls['transfer__footer']}>
        <p>
          • Please treanfer $ {mathTotal(carts, '1', points)} USD ( ${' '}
          {mathTotal(carts, '1', points)} (SGD) ) to our bank account for payment
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
