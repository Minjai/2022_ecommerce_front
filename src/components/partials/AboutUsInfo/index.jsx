import { useNavigate } from 'react-router-dom';
import cls from './aboutUsInfo.module.scss';
import Logo from '../../elements/UI/Logo';

const AboutUsInfo = () => {
  const navigate = useNavigate();

  return (
    <div className={cls['about']}>
      <div className={cls['about__body']}>
        <img src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752' alt="" />
        <div>
          <Logo />
          <p>
            · Address : Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown ·
          </p>
          <p>Email : test@gmail.com</p>
        </div>
      </div>
      <div className={cls['about__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default AboutUsInfo;
