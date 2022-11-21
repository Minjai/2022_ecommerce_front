import { AiOutlineRight } from 'react-icons/ai';
import cls from './userStatus.module.scss';

const UserStatus = () => {
  return (
    <div className={cls['user']}>
      <div className={cls['user-board']}>
        <h3>Hello React</h3>
        <div className={cls['user-board__body']}>
          <div>
            <b>1</b>
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
          <div>
            <b>2</b>
            <span>reviews</span>
          </div>
          <div>
            <b>3</b>
            <span>questions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
