import Pagination from '../../elements/Pagination';
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
  return (
    <div className={cls['news-list']}>
      <div className={cls['news-list__body']}>
        {data.map(({ id, date, text }) => (
          <div key={id} className={cls['news-list__child']}>
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
