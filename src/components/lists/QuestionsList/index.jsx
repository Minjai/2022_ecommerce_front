import { AiOutlineDown, AiOutlineLock } from 'react-icons/ai';
import { dateParser } from '../../../utils/dateParser';
import Pagination from '../../elements/Pagination';
import { useNavigate } from 'react-router-dom';
import cls from './questionsList.module.scss';
import { useState } from 'react';
import { paths } from '../../../constants/paths';

const QuestionsList = ({ data }) => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  const navigate = useNavigate();

  const navigatePostHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CUSTOMER_POST}`)
  }

  return (
    <div className={cls['question']}>
      <div className={cls['question__header']}>
        <h3>My questions</h3>
        <div className={cls['question__header__child']}>
          <div>
            <span className={cls[isRange ? 'active' : '']}>
              <p onClick={() => setRange((prev) => !prev)}>
                {select} <AiOutlineDown />
              </p>
              <ul>
                <li onClick={() => handleRange('Past 3 months')}>
                  Past 3 months
                </li>
                <li onClick={() => handleRange('Past 6 months')}>
                  Past 6 months
                </li>
                <li onClick={() => handleRange('Past 12 months')}>
                  Past 12 months
                </li>
                <li onClick={() => handleRange('All order')}>All order</li>
              </ul>
            </span>
            <button onClick={navigatePostHandler}>
              Ask New
            </button>
          </div>
          <p>{data.results.length} Questions</p>
        </div>
      </div>
      <div className={cls['question__body']}>
        {data.results.map(
          ({ product, detail, children, created_at }, index) => {
            return (
              <div
                id={cls[product.images.length > 0 ? '' : 'active']}
                key={created_at}
                className={cls['question__body__child']}
              >
                <div>
                  <span>{index}</span>
                  <img
                    src={product.images.find((item) => item.is_feature).image}
                    alt="question-list"
                  />
                  <div>
                    <AiOutlineLock />
                    <p>{detail}</p>
                  </div>
                </div>
                <div>
                  <span>{children.length} replies</span>
                  <p>{dateParser(created_at)}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default QuestionsList;
