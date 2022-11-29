import Pagination from '../../elements/Pagination';
import { useNavigate } from 'react-router-dom';
import cls from './newsList.module.scss';

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

const NewsList = () => {
  const navigate = useNavigate();

  return (
    <div className={cls['news-list']}>
      <div className={cls['news-list__body']}>
        {data.map(({ id, date, text }) => (
          <div
            onClick={() => navigate(`/news/${id}`)}
            key={id}
            className={cls['news-list__child']}
          >
            <p>{text}</p>
            {date}
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
