import PageTitle from '../../elements/UI/PageTitle';
import RouterLink from '../../elements/RouterLink';
import { paths } from '../../../constants/paths';
import cls from './userNav.module.scss';

const UserNav = ({ param }) => {
  return (
    <div className={cls['user-nav']}>
      <PageTitle>My Page</PageTitle>
      <div className={cls['user-nav__child']}>
        <p>My Shopping</p>
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
      <div className={cls['user-nav__child']}>
        <p>My Activity</p>
        <ul>
          <li className={cls[param['*'] === paths.QUESTIONS ? 'active' : '']}>
            <RouterLink to={paths.QUESTIONS}>My Questions</RouterLink>
          </li>
          <li
            className={
              cls[
                param['*'] === paths.USER_REVIEWS
                  ? 'active'
                  : param['*'] === paths.WRITE_REVIEW
                  ? 'active'
                  : ''
              ]
            }
          >
            <RouterLink to={paths.USER_REVIEWS}>My Reviews</RouterLink>
          </li>
        </ul>
      </div>
      <div className={cls['user-nav__child']}>
        <p>My Profile</p>
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

export default UserNav;
