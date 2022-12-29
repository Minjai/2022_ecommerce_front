import { initConsultation } from '../../../store/slices/consultation';
import { AiOutlineDown, AiOutlineLock } from 'react-icons/ai';
import { dateParser } from '../../../utils/dateParser';
import Pagination from '../../elements/Pagination';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import cls from './questionsList.module.scss';
import { useDispatch } from 'react-redux'

const QuestionsList = ({ data, options, filterOptions }) => {
  const { isRange, setSelect, select, setRange } = filterOptions;

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const navigatePostHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CUSTOMER_POST}`);
  };

  const initQuestionsHandler = (item) => {
    dispatch(initConsultation(item));
    navigate(`/${paths.CONSULTATION}/${item.category.id}/`);
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
            <button onClick={navigatePostHandler}>Ask New</button>
          </div>
          <p>{data.count} Questions</p>
        </div>
      </div>
      <div className={cls['question__body']}>
        {data.results.map((item, index) => {
          return (
            <div
              id={cls[item.product.images.length > 0 ? '' : 'active']}
              key={item.created_at}
              className={cls['question__body__child']}
            >
              <div>
                <span>{index + 1}</span>
                <img
                  src={
                    item.product.images.find((item) => item.is_feature).image
                  }
                  alt="question-list"
                />
                <div>
                  <AiOutlineLock />
                  <p>{item.detail}</p>
                </div>
              </div>
              <div>
                <span className={cls['pointer']} onClick={() => initQuestionsHandler(item)}>
                  {item.children.length} replies
                </span>
                <p>{dateParser(item.created_at)}</p>
              </div>
            </div>
          );
        })}
      </div>
      {options.pageCount > options.limit && <Pagination options={options} />}
    </div>
  );
};

export default QuestionsList;
