import { useDeleteOrderMutation } from '../../../store/query/orderQuery';
import { setContent, setModal } from '../../../store/slices/modal';
import { setSingleOrder } from '../../../store/slices/order';
import { dateParser } from '../../../utils/dateParser';
import { modalPaths } from '../../../constants/paths';
import EmptyText from '../../elements/UI/EmptyText';
import cls from './orderList.module.scss';
import { useDispatch } from 'react-redux';

const orderStatus = {
  AWAITING_PAYMENT: 'awaiting_payment',
  CONFIRMING_PAYMENT: 'confirming_payment',
  PREPARING_FOR_DELIVERY: 'preparing_for_delivery',
  SHIPPED: 'shipped',
  DELIVIRED: 'delivered',
};

const OrderList = ({ data }) => {
  const dispatch = useDispatch();

  const orderModalHandler = () => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.ORDER));
  };

  const orderPaymentHandler = (data) => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.PAYMENT));
    dispatch(setSingleOrder(data));
  };

  const [deleteOrder] = useDeleteOrderMutation();

  return (
    <div className={cls['order']}>
      {data?.length > 0 ? (
        data?.map((elem) => (
          <div key={elem.id} className={cls['order__child']}>
            <div className={cls['order__child__header']}>
              <div>
                <span>
                  <p>Order Date</p>
                  <p>{dateParser(elem.created_at)}</p>
                </span>
                <span>
                  <p>Total</p>
                  <p>${elem.total_cost.USD}</p>
                </span>
              </div>
              <span>
                <p>Order number</p>
                <p>{elem.order_id}</p>
              </span>
            </div>
            <div className={cls['order__child__body']}>
              <h4
                className={
                  cls[
                    elem.status === orderStatus.CONFIRMING_PAYMENT
                      ? 'active'
                      : ''
                  ]
                }
              >
                {elem.status === orderStatus.AWAITING_PAYMENT
                  ? 'Awaiting Payment'
                  : elem.status === orderStatus.CONFIRMING_PAYMENT
                  ? 'Please re-submit your payment'
                  : elem.status === orderStatus.DELIVIRED
                  ? 'Delivired'
                  : elem.status === orderStatus.SHIPPED
                  ? 'Shipped'
                  : ''}
              </h4>
              {elem.order_items?.length > 0 ? (
                elem.order_items?.map((item) => (
                  <div
                    key={item?.id}
                    className={cls['order__child__body__content']}
                  >
                    <img
                      src={
                        item?.info?.images?.find(
                          (image) => image.is_feature === true
                        ).image
                      }
                      alt="order-product-pic"
                    />
                    <div>
                      <p>{item?.info?.product_name}</p>
                      <span>100 ea</span>
                      <p>${item?.info?.prices[0]?.selling_price}</p>
                      {elem.status === 'sent' && (
                        <button>Write a review</button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <EmptyText text={'order'} />
              )}
              <div className={cls['order__child__body__buttons']}>
                <button
                  onClick={() => {
                    elem.status === orderStatus.AWAITING_PAYMENT ||
                    elem.status === orderStatus.CONFIRMING_PAYMENT
                      ? deleteOrder({
                          id: elem.id,
                          token: localStorage.getItem('accessToken'),
                        })
                      : orderModalHandler();
                  }}
                >
                  {elem.status === orderStatus.AWAITING_PAYMENT ||
                  elem.status === orderStatus.CONFIRMING_PAYMENT
                    ? 'Cancel Order'
                    : 'View Tracking'}
                </button>
                <button
                  id={
                    cls[
                      elem.status === orderStatus.SHIPPED ||
                      elem.status === orderStatus.DELIVIRED
                        ? 'invalid'
                        : ''
                    ]
                  }
                  onClick={() => orderPaymentHandler(elem)}
                  className={cls['active']}
                >
                  Make a Payment
                </button>
                <p>
                  {elem.status === orderStatus.AWAITING_PAYMENT
                    ? '*Please upload either bank receipt or screenshot'
                    : elem.status === orderStatus.SHIPPED ||
                      elem.status === orderStatus.DELIVIRED
                    ? '*Payment upload complete'
                    : ''}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <EmptyText text={'order'} />
      )}
    </div>
  );
};

export default OrderList;
