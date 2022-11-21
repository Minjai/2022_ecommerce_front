import { useNavigate } from 'react-router-dom';
import cls from './newInfo.module.scss';

const NewInfo = ({ id }) => {
  const navigate = useNavigate();

  return (
    <div className={cls['new']}>
      <div className={cls['new__title']}>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          quae.
        </span>
        <span>01/01/2020</span>
      </div>
      <div className={cls['new__body']}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          corporis assumenda. Explicabo dignissimos aspernatur aperiam dolores
          blanditiis repudiandae, neque, perferendis eum iure officia nesciunt
          quod soluta et ex libero voluptatibus.It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img
          src="https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss-450x300.jpg  "
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
