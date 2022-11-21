import { customerHelpLinks } from '../../../constants/header';
import { useParams } from 'react-router-dom';
import cls from './customerNav.module.scss';
import RouterLink from '../RouterLink';

const CustomerNav = () => {
  const params = useParams();

  return (
    <div className={cls['customer-nav']}>
      {customerHelpLinks.map(({ id, text, to }) => (
        <span key={id} className={cls[params['*'] === to ? 'customerLink' : '']}>
          <RouterLink
            to={to}
          >
            {text}
          </RouterLink>
        </span>
      ))}
    </div>
  );
};

export default CustomerNav;
