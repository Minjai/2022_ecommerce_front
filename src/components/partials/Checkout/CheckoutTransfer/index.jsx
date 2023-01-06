import { useGetPaymentInfoQuery } from '../../../../store/query/paymentQuery';
import { useGetUserPointsQuery } from '../../../../store/query/pointsQuery';
import { mathCurrency, mathShipping } from '../../../../utils/mathCurrency';
import { setAlert, setAlertContent } from '../../../../store/slices/alert';
import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import { useGetCurrencyQuery } from '../../../../store/query/currency';
import { setDiscountPoints } from '../../../../store/slices/points';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { mainCurrency } from '../../../../utils/mainCurrency';
import { axiosInstance } from '../../../../constants/axios';
import { mathTotal } from '../../../../utils/mathTotal';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import MobileOrderNav from '../../MobileOrderNav';
import cls from './checkoutTransfer.module.scss';
import { useNavigate } from 'react-router-dom';

const CheckoutTransfer = () => {
  const { backBtnHandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_FOURTH}`
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { conditionId } = useSelector((state) => state.order);
  const { data: deliveryData } = useSelector((state) => state.delivery);
  const { points, staticPoints } = useSelector((state) => state.points);
  const { singleOrder } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.cart);
  const { activeCurrency } = useSelector((state) => state.currency);

  const setOrderAlarm = async () => {
    try {
      const response = await axiosInstance.post(
        'notifications/notifications/',
        {
          recipient: userInfo.id,
          source: 'user',
          extra_info: 'Your order has been added !',
          status_to_read: true,
          type_notification: 'order_accept',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const createOrderItems = async (data, item) => {
    try {
      const itemObject =
        item.pickedMethod.id > 0
          ? {
              product: item.id,
              quantity: item.pickedPackage.id,
              order: data.id,
              shipping_method: item.pickedMethod.id,
            }
          : {
              product: item.id,
              quantity: item.pickedPackage.id,
              order: data.id,
            };

      const response = await axiosInstance.post(
        'orders/order_items/',
        itemObject,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
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

      dispatch(setDiscountPoints(0));
    } catch (error) {}
  };

  const orderCreatedHandler = async (id) => {
    try {
      const response = await axiosInstance.patch(
        `orders/orders/${id}/`,
        {
          order_created: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
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
          shipping_fee: +mathShipping(carts, 1),
          currency: activeCurrency?.id,
          convertor_point_value: mathCurrency(
            points / 1000,
            activeCurrency?.currency_price
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      if (singleOrder?.length) {
        createOrderItems(response.data, singleOrder[0]);
      } else {
        if (JSON.parse(localStorage.getItem('shop-cart')).length === 1) {
          const carts = JSON.parse(localStorage.getItem('shop-cart'));
          createOrderItems(response.data, carts[0]);
        } else {
          const carts = JSON.parse(localStorage.getItem('shop-cart'));
          carts.forEach((item) => createOrderItems(response.data, item));
        }
      }

      await orderCreatedHandler(response?.data?.id);

      navigate(`/${paths.MY_PAGE}/${paths.ORDER_HISTORY}`);
      decrementUserPoints();
      dispatch(setAlert(true));
      dispatch(setAlertContent('Your order has been added !'));
      setOrderAlarm();
    } catch (error) {
      console.log(error.response);
    }
  };

  const { data } = useGetPaymentInfoQuery({
    token: localStorage.getItem('accessToken'),
  });

  const { data: pointsData } = useGetUserPointsQuery({
    userId: userInfo.id,
    token: localStorage.getItem('accessToken'),
  });

  const { data: currencyData } = useGetCurrencyQuery();

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
        <p>Account Name: {data?.results[0]?.account_name}</p>
        <p>Account Number: {data?.results[0]?.account_number}</p>
        <p>Account Address: {data?.results[0]?.account_address}</p>
        <p>Swift Code: {data?.results[0]?.swift_code}</p>
        <p>Bank Name: {data?.results[0]?.bank_name}</p>
        <p>Bank Address: {data?.results[0]?.bank_address}</p>
        <p>Country / Region: {data?.results[0]?.county_region}</p>
      </div>
      <div className={cls['transfer__footer']}>
        <p>
          <b>•</b> Please treanfer {activeCurrency?.currency_value} {'   '}
          {mathTotal(
            activeCurrency,
            singleOrder?.length ? singleOrder : carts,
            +mathShipping(carts, +activeCurrency?.currency_price),
            points
          )?.toFixed(2)}{' '}
          {activeCurrency.currency} ({' '}
          {mainCurrency(currencyData?.results)?.currency_value}{' '}
          {mathTotal(
            mainCurrency(currencyData?.results),
            singleOrder?.length ? singleOrder : carts,
            +mathShipping(
              carts,
              +mainCurrency(currencyData?.results)?.currency_price
            ),
            points
          )?.toFixed(2)}{' '}
          ) to our bank account for payment
        </p>
        <p className={cls['active']}>
          <b>•</b> Bank transfer fees are the buyer’s payments.
        </p>
        <p>
          <b>•</b> Please upload the receipt or screenshot on the website “ My
          Page “ → “Order History” page after deposit.
        </p>
      </div>
      <CheckoutButtons next={createOrder} prev={backBtnHandler} />
    </div>
  );
};

export default CheckoutTransfer;
