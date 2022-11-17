import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Pagination from '../../elements/Pagination';
import cls from './faqList.module.scss';
import { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'How do I check the delivery status for non-member orders?',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk) along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
  {
    id: 2,
    title: 'Is there a deadline for same-day delivery?',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
  {
    id: 3,
    title: 'Is there any standard for free shipping?',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
];

const FaqList = () => {
  const [active, setActive] = useState('');

  return (
    <div className={cls['faq-list']}>
      <div className={cls['faq-list__body']}>
        {data.map(({ id, title, content }) => (
          <div
            id={cls[active === id ? 'active' : 'none']}
            key={id}
            className={cls['faq-list__child']}
          >
            <div
              onClick={() => setActive((prev) => (prev === id ? null : id))}
              className={cls['faq-list__child__header']}
            >
              <p>
                <b>Q</b>
                {title}
              </p>
              <span>
                {active === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            <div className={cls['faq-list__child__content']}>
              <span>A</span> <p>{content}</p>
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
