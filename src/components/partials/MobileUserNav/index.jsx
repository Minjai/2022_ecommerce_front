import RouterLink from '../../elements/RouterLink';
import { paths } from '../../../constants/paths';
import { AiOutlineDown } from 'react-icons/ai';
import cls from './mobileUserNav.module.scss';
import { useState } from 'react';

const MobileUserNav = ({ param }) => {
  const [activeDrop, setActiveDrop] = useState('');

  return (
    <div className={cls['mobile-usernav']}>
      <div
        id={cls[activeDrop === 'shopping' ? 'active_drop' : '']}
        className={cls['mobile-usernav__child']}
      >
        <span
          onClick={() =>
            setActiveDrop((prev) => (prev === 'shopping' ? '' : 'shopping'))
          }
        >
          My Shopping <AiOutlineDown />
        </span>
        <ul>
          <li
            className={cls[param['*'] === paths.ORDER_HISTORY ? 'active' : '']}
          >
            <RouterLink to={paths.ORDER_HISTORY}>Order History</RouterLink>
          </li>
          <li className={cls[param['*'] === paths.POINTS ? 'active' : '']}>
            <RouterLink to={paths.POINTS}>Points</RouterLink>
          </li>
        </ul>
      </div>
      <div
        id={cls[activeDrop === 'activity' ? 'active_drop' : '']}
        className={cls['mobile-usernav__child']}
      >
        <span
          onClick={() =>
            setActiveDrop((prev) => (prev === 'activity' ? '' : 'activity'))
          }
        >
          My Activity <AiOutlineDown />
        </span>
        <ul>
          <li
            className={cls[param['*'] === paths.QUESTIONS ? 'active' : '']}
          >
            <RouterLink to={paths.QUESTIONS}>My Questions</RouterLink>
          </li>
          <li
            className={cls[param['*'] === paths.USER_REVIEWS ? 'active' : '']}
          >
            <RouterLink to={paths.USER_REVIEWS}>My Reviews</RouterLink>
          </li>
        </ul>
      </div>
      <div
        id={cls[activeDrop === 'profile' ? 'active_drop' : '']}
        className={cls['mobile-usernav__child']}
      >
        <span
          onClick={() =>
            setActiveDrop((prev) => (prev === 'profile' ? '' : 'profile'))
          }
        >
          My Profile <AiOutlineDown />
        </span>
        <ul>
          <li
            className={cls[param['*'] === paths.EDIT_PROFILE ? 'active' : '']}
          >
            <RouterLink to={paths.EDIT_PROFILE}>Edit Profile</RouterLink>
          </li>
          <li
            className={
              cls[param['*'] === paths.CHANGE_PASSWORD ? 'active' : '']
            }
          >
            <RouterLink to={paths.CHANGE_PASSWORD}>Change Password</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileUserNav;
