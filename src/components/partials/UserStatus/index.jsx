import { useGetUserConsultationsQuery } from '../../../store/query/consultationQuery';
import { useGetReviewsQuery } from '../../../store/query/reviewQuery';
import { useGetOrdersQuery } from '../../../store/query/orderQuery';
import { paths } from '../../../constants/paths';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import cls from './userStatus.module.scss';
import { useSelector } from 'react-redux';
import { orderTable } from '../../../utils/userOrderTable';

const UserStatus = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const newPageHandler = (path) => {
    window.scrollTo(window.scrollX, 0);
    navigate(path);
  };

  const { data } = useGetOrdersQuery(
    {
      token: localStorage.getItem('accessToken'),
      userId: userInfo.id,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: reviewData } = useGetReviewsQuery(
    { userId: userInfo.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: questionData } = useGetUserConsultationsQuery({
    token: localStorage.getItem('accessToken'),
    userId: userInfo.id,
  });

  const userOrderStatus = orderTable(data)

  return (
    <div className={cls['user']}>
      <div className={cls['user-board']}>
        <h3>Hello {userInfo.username}</h3>
        <div className={cls['user-board__body']}>
          <div
            onClick={() =>
              newPageHandler(`/${paths.MY_PAGE}/${paths.ORDER_HISTORY}`)
            }
          >
            <b>{data?.results.length}</b>
            <span>orders</span>
          </div>
          <div>
            <b>50</b>
            <span>points</span>
          </div>
        </div>
      </div>
      <div className={cls['user-status']}>
        <h3>My Order Status</h3>
        <div className={cls['user-status__body']}>
          <div className={cls['user-status__body__month']}>
            ( Last 3 months )
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span id={cls[userOrderStatus.awaiting_payment > 0 && 'active']}>{userOrderStatus.awaiting_payment}</span>
              <p>awaiting payment</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span id={cls[userOrderStatus.confirming_payment > 0 && 'active']}>{userOrderStatus.confirming_payment}</span>
              <p>confirming payment</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span id={cls[userOrderStatus.preparing_for_delivery > 0 && 'active']}>{userOrderStatus.preparing_for_delivery}</span>
              <p>preparing for delivery</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span id={cls[userOrderStatus.shipped > 0 && 'active']}>{userOrderStatus.shipped}</span>
              <p>shipped</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span id={cls[userOrderStatus.delivered > 0 && 'active']}>{userOrderStatus.delivered}</span>
              <p>delivered</p>
            </div>
          </div>
          <div className={cls['user-status__body__lastChild']}>
            <p>
              orders <span>{data?.results.length}</span>
            </p>
            <p>
              canceled <span>0</span>
            </p>
          </div>
        </div>
      </div>
      <div className={cls['user-board']}>
        <div className={cls['user-board__body']}>
          <div
            onClick={() =>
              newPageHandler(`/${paths.MY_PAGE}/${paths.USER_REVIEWS}`)
            }
          >
            <b>{reviewData?.results.length}</b>
            <span>reviews</span>
          </div>
          <div
            onClick={() =>
              newPageHandler(`/${paths.MY_PAGE}/${paths.QUESTIONS}`)
            }
          >
            <b>{questionData?.results.length}</b>
            <span>questions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
