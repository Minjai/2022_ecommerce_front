import Pagination from '../../elements/Pagination';
import { useNavigate } from 'react-router-dom';
import cls from './newsList.module.scss';
import { dateParser } from '../../../utils/dateParser';

const data = [
  {
    id: 1,
    text: 'Lorem ipsum dolar',
    date: '10/12/2022',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolar',
    date: '10/12/2022',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolar',
    date: '10/12/2022',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolar',
    date: '10/12/2022',
  },
  {
    id: 5,
    text: 'Lorem ipsum dolar',
    date: '10/12/2022',
  },
];

const NewsList = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={cls['news-list']}>
      <div className={cls['news-list__body']}>
        {data.results.map(({ id, created_at, title }) => (
          <div
            onClick={() => navigate(`/news/${id}`)}
            key={id}
            className={cls['news-list__child']}
          >
            <p>{title}</p>
            {dateParser(created_at)}
          </div>
        ))}
      </div>
      <div className={cls['news-list__footer']}>
        <Pagination pages={10} />
      </div>
    </div>
  );
};

export default NewsList;
