import { useNavigate } from 'react-router-dom';
import cls from './notFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={cls['not-found']}>
      <div className={cls['not-found__header']}>
        <h3>404</h3>
        <p>Page does not exist</p>
      </div>
      <div className={cls['not-found__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
