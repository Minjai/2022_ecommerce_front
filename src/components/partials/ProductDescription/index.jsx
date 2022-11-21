import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import cls from './productDescription.module.scss';
import { useState } from 'react';

const ProductDescription = ({ list }) => {
  const [active, setActive] = useState('');

  return (
    <div className={cls['description']}>
      {list.map(({ id, title, content }) => (
        <div
          id={cls[active === id ? 'active' : '']}
          key={id}
          className={cls['description__child']}
        >
          <span onClick={() => setActive((prev) => (prev === id ? null : id))}>
            {title}
            {active === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </span>
          <ul>
            <li>{content}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
