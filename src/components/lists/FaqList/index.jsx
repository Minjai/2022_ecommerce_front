import Pagination from '../../elements/Pagination';
import { BsPlusLg } from 'react-icons/bs';
import cls from './faqList.module.scss';
import { useState } from 'react';

const FaqList = ({ data, options }) => {
  const [active, setActive] = useState(null);

  return (
    <div className={cls['faq-list']}>
      <div className={cls['faq-list__body']}>
        {data?.results.map(({ id, question_title, answer }) => (
          <div
            id={cls[active === question_title ? 'active' : 'none']}
            key={id}
            className={cls['faq-list__child']}
          >
            <div
              onClick={() =>
                setActive((prev) =>
                  prev === question_title ? null : question_title
                )
              }
              className={cls['faq-list__child__header']}
            >
              <p>
                <b>Q</b>
                {question_title}
              </p>
              <span>
                {active === question_title ? (
                  <b></b>
                ) : (
                  <BsPlusLg />
                )}
              </span>
            </div>
            <div className={cls['faq-list__child__content']}>
              <span>A</span> <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
      {data?.count > options?.limit && (
        <div className={cls['faq-list__footer']}>
          <Pagination options={options} />
        </div>
      )}
    </div>
  );
};

export default FaqList;
