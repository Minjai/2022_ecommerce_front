import { useGetUserConsultationsQuery } from '../../../store/query/consultationQuery';
import { useGetReviewsQuery } from '../../../store/query/reviewQuery';
import { useGetOrdersQuery } from '../../../store/query/orderQuery';
import { paths } from '../../../constants/paths';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import cls from './userStatus.module.scss';
import { useSelector } from 'react-redux';

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
              <span>1</span>
              <p>awaiting payment</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span>0</span>
              <p>confirming payment</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span>1</span>
              <p>preparing for delivery</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span>0</span>
              <p>shipped</p>
            </div>
            <AiOutlineRight />
          </div>
          <div className={cls['user-status__body__child']}>
            <div>
              <span>1</span>
              <p>delivered</p>
            </div>
          </div>
          <div className={cls['user-status__body__lastChild']}>
            <p>
              orders <span>0</span>
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
