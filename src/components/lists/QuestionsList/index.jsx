import { AiOutlineDown, AiOutlineLock } from 'react-icons/ai';
import Pagination from '../../elements/Pagination';
import cls from './questionsList.module.scss';
import { useState } from 'react';

const QuestionsList = () => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

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
            <button>Ask New</button>
          </div>
          <p>2 Questions</p>
        </div>
      </div>
      <div className={cls['question__body']}>
        <div className={cls['question__body__child']}>
          <div>
            <span>1</span>
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
              alt="question-list"
            />
            <div>
              <AiOutlineLock />
              <p>
                I have question Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ullam, asperiores.
              </p>
            </div>
          </div>
          <div>
            <span>2 replies</span>
            <p>01/04/2022</p>
          </div>
        </div>
        <div id={cls['active']} className={cls['question__body__child']}>
          <div>
            <span>1</span>
            <div>
              <AiOutlineLock />
              <p>I have question</p>
            </div>
          </div>
          <div>
            <span>2 replies</span>
            <p>01/04/2022</p>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default QuestionsList;
