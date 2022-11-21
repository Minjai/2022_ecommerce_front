import Pagination from '../../elements/Pagination';
import { paths } from '../../../constants/paths';
import { AiOutlineDown } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Rating from '../../elements/UI/Rating';
import cls from './userList.module.scss';
import { useState } from 'react';

const UserReviewList = () => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

  const navigate = useNavigate();

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  return (
    <div className={cls['review']}>
      <div className={cls['review__header']}>
        <h3>My reviews</h3>
        <div className={cls['review__header__child']}>
          <div>
            <span className={cls[isRange ? 'active' : '']}>
              <p onClick={() => setRange((prev) => !prev)}>
                {select} <AiOutlineDown />
              </p>
              <ul>
                <li onClick={() => handleRange('React')}>React</li>
                <li onClick={() => handleRange('Redux')}>React</li>
              </ul>
            </span>
            <button onClick={() => navigate(`/user/${paths.WRITE_REVIEW}`)}>
              Write New
            </button>
          </div>
          <p>5 Reviews</p>
        </div>
      </div>
      <div className={cls['review__body']}>
        <div className={cls['review__body__child']}>
          <div>
            <span>1</span>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
              alt="review-list"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, reiciendis!
            </p>
          </div>
          <div>
            <Rating productRating={5} />
            <p>01/04/2022</p>
          </div>
        </div>
        <div className={cls['review__body__child']}>
          <div>
            <span>1</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              non.
            </p>
          </div>
          <div>
            <Rating productRating={3} />
            <p>01/04/2022</p>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default UserReviewList;
