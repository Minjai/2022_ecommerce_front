import { setSingleOrder, setTrackingNumber } from '../../../store/slices/order';
import { useDeleteOrderMutation } from '../../../store/query/orderQuery';
import { setContent, setModal } from '../../../store/slices/modal';
import { dateParser } from '../../../utils/dateParser';
import { orderStatus } from '../../../constants/order';
import { modalPaths } from '../../../constants/paths';
import EmptyText from '../../elements/UI/EmptyText';
import { useNavigate } from 'react-router-dom';
import cls from './orderList.module.scss';
import { useDispatch } from 'react-redux';

const OrderList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderModalHandler = () => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.ORDER));
    dispatch(setTrackingNumber(data?.tracking_number));
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
                  <p>
                    ${' '}
                    {elem?.order_items.reduce(
                      (prev, elem) => (prev += +elem?.quantity?.selling_price),
                      0
                    ) - elem.point_used / 1000}
                  </p>
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
                        item?.product?.images?.find(
                          (image) => image.is_feature === true
                        ).image
                      }
                      alt="order-product-pic"
                    />
                    <div>
                      <p>{item?.product?.product_name}</p>
                      <span>{item?.quantity.package}</span>
                      <p>$ {+item?.quantity.selling_price}</p>
                      {elem.status === 'sent' && (
                        <button
                          onClick={() => navigate(`write-review/${item.id}`)}
                        >
                          Write a review
                        </button>
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
