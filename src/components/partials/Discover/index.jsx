import { useGetFirstTwoNewsQuery } from '../../../store/query/newsQuery';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import Loader from '../../elements/UI/Loader';
import cls from './discover.module.scss';

const Discover = () => {
  const { data, isloading } = useGetFirstTwoNewsQuery();

  const navigate = useNavigate();

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CUSTOMER_HELP}/${paths.NEWS}`)
  }

  return isloading ? (
    <Loader />
  ) : data?.results.length !== 0 ? (
    <div className={cls['discover']}>
      {data?.results.map((item, index) => (
        <div
          key={item.id}
          id={cls[index === 1 ? 'active' : '']}
          className={cls['discover__child']}
        >
          <h4>{item.title}</h4>
          <img src={item.banner} alt="discover-pic" />
          <p>{item.text}</p>
          <button
            onClick={navigateHandler}
          >
            View More
          </button>
        </div>
      ))}
    </div>
  ) : (
    <EmptyText text={'news'} />
  );
};

export default Discover;
