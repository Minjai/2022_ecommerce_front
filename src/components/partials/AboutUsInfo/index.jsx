import { useGetContactsQuery } from '../../../store/query/settingsQuery';
import { useNavigate } from 'react-router-dom';
import cls from './aboutUsInfo.module.scss';
import Logo from '../../elements/UI/Logo';

const AboutUsInfo = () => {
  const navigate = useNavigate();
  const { data } = useGetContactsQuery()

  return (
    <div className={cls['about']}>
      <div className={cls['about__body']}>
        <img src={data?.results[0]?.image} alt="about-pic" />
        <div>
          <Logo />
          <p className={cls['active']}>Address: {data?.results[0]?.address}</p>
          <p>Email : {data?.results[0]?.email}</p>
        </div>
      </div>
      <div className={cls['about__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default AboutUsInfo;
