import { dateParser } from '../../../utils/dateParser';
import Pagination from '../../elements/Pagination';
import { useNavigate } from 'react-router-dom';
import cls from './newsList.module.scss';

const NewsList = ({ data, options }) => {
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
      {options.pageCount > options.limit && (
        <div className={cls['news-list__footer']}>
          <Pagination options={options} />
        </div>
      )}
    </div>
  );
};

export default NewsList;
