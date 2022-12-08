import { useDeleteOrderMutation } from '../../../store/query/orderQuery';
import { setContent, setModal } from '../../../store/slices/modal';
import { setSingleOrder } from '../../../store/slices/order';
import { modalPaths } from '../../../constants/paths';
import EmptyText from '../../elements/UI/EmptyText';
import cls from './orderList.module.scss';
import { useDispatch } from 'react-redux';

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

  const orderDateParser = (date) => {
    const newDate = new Date(date);

    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${day < 10 ? `0${day}` : day}/${
      month + 1 < 10 ? `0${month + 1}` : month + 1
    }/${year}`;
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
                  <p>{orderDateParser(elem.created_at)}</p>
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
              <h4 className="active">
                {elem.status === 'in_process'
                  ? 'Awaiting Payment'
                  : elem.status === 'closed'
                  ? 'Shipped'
                  : elem.status === 'sent'
                  ? 'Delivered'
                  : 'Please re-submit your payment'}
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
                  onClick={() =>
                    deleteOrder({
                      id: elem.id,
                      token: localStorage.getItem('accessToken'),
                    })
                  }
                >
                  Cancel Order
                </button>
                <button
                  onClick={() => orderPaymentHandler(elem)}
                  className={cls['active']}
                >
                  Make a Payment
                </button>
                <p>
                  {elem.status === 'sent'
                    ? '*Payment upload complete'
                    : elem.status === 'closed'
                    ? '*Payment upload complete'
                    : elem.status === 'in_process'
                    ? '*Please upload either bank receipt or screenshot'
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
