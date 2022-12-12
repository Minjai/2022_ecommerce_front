import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Pagination from '../../elements/Pagination';
import cls from './faqList.module.scss';
import { useState } from 'react';

const FaqList = ({ data }) => {
  const [active, setActive] = useState(null);

  return (
    <div className={cls['faq-list']}>
      <div className={cls['faq-list__body']}>
        {data.results.map(({ id, question_title, answer }) => (
          <div
            id={cls[active === question_title ? 'active' : 'none']}
            key={id}
            className={cls['faq-list__child']}
          >
            <div
              onClick={() => setActive((prev) => (prev === question_title ? null : question_title))}
              className={cls['faq-list__child__header']}
            >
              <p>
                <b>Q</b>
                {question_title}
              </p>
              <span>
                {active === question_title ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            <div className={cls['faq-list__child__content']}>
              <span>A</span> <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={cls['faq-list__footer']}>
        <Pagination />
      </div>
    </div>
  );
};

export default FaqList;
