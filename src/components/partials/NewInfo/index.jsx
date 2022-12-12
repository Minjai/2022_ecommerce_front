import { useNavigate } from 'react-router-dom';
import { dateParser } from '../../../utils/dateParser';
import cls from './newInfo.module.scss';

const NewInfo = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div className={cls['new']}>
      <div className={cls['new__title']}>
        <span>{info.title}</span>
        <span>{dateParser(info.created_at)}</span>
      </div>
      <div className={cls['new__body']}>
        <p>{info.text}</p>
        <img
          src={info.banner}
          alt="news-pic"
        />
      </div>
      <div className={cls['new__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NewInfo;
