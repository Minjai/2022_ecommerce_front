import { setSingleOrder, setTrackingNumber } from '../../../store/slices/order';
import { useCancelOrderMutation } from '../../../store/query/orderQuery';
import { mathCurrency, mathShipping } from '../../../utils/mathCurrency';
import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import { mathModalTotal } from '../../../utils/mathTotal';
import { dateParser } from '../../../utils/dateParser';
import { orderStatus } from '../../../constants/order';
import EmptyText from '../../elements/UI/EmptyText';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cls from './orderList.module.scss';

const OrderList = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderModalHandler = (tracking) => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.ORDER));
    dispatch(setTrackingNumber(tracking));
  };

  const orderPaymentHandler = (data) => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.PAYMENT));
    dispatch(setSingleOrder(data));
  };

  const [cancelOrder] = useCancelOrderMutation();

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
                    {elem?.currency?.currency_value}{' '}
                    {mathModalTotal(
                      elem.currency,
                      elem?.order_items,
                      +mathShipping(
                        elem?.shipping_fee,
                        +elem?.currency?.currency_price
                      ),
                      elem?.point_used
                    )?.toFixed(2)}
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
                      : elem.status === orderStatus.RETRY
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
                  : elem.status === orderStatus.CANCELED
                  ? 'Canceled'
                  : elem.status === orderStatus.RETRY
                  ? 'Retry Upload Receipt'
                  : ''}
              </h4>
              {elem.order_items?.length > 0 ? (
                elem.order_items?.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className={cls['order__child__body__content']}
                    >
                      <img
                        src={
                          item?.product?.images?.find(
                            (image) => image.is_feature === true
                          )?.image
                        }
                        alt="order-product-pic"
                      />
                      <div>
                        <p>{item?.product?.product_name}</p>
                        <span>{item?.quantity?.package}</span>
                        <p>
                          {elem?.currency?.currency_value}{' '}
                          {mathCurrency(
                            item?.quantity?.selling_price,
                            elem?.currency?.currency_price
                          )}
                        </p>
                        {(elem.status === orderStatus.SHIPPED ||
                          elem.status === orderStatus.DELIVIRED) && (
                          <button
                            onClick={() =>
                              navigate(
                                `/${paths.MY_PAGE}/write-review/${item.id}`
                              )
                            }
                          >
                            Write a review
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <EmptyText text={'order'} />
              )}
              <div className={cls['order__child__body__buttons']}>
                <button
                  id={
                    cls[elem.status === orderStatus.CANCELED ? 'invalid' : '']
                  }
                  onClick={() => {
                    elem.status === orderStatus.AWAITING_PAYMENT ||
                    elem.status === orderStatus.CONFIRMING_PAYMENT
                      ? cancelOrder({
                          id: elem.id,
                          token: localStorage.getItem('accessToken'),
                        })
                      : orderModalHandler(elem.tracking_number);
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
                      elem.status === orderStatus.DELIVIRED ||
                      elem.status === orderStatus.CANCELED
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
                  {elem.status === orderStatus.AWAITING_PAYMENT ||
                  elem.status === orderStatus.RETRY
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
