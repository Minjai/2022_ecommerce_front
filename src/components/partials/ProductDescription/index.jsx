import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import cls from './productDescription.module.scss';
import { useEffect, useState } from 'react';

const ProductDescription = ({ list }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(list[0]?.id)
  }, [list])

  return (
    <div className={cls['description']}>
      {list.map(({ id, description, title }) => (
        <div
          id={cls[active === id ? 'active' : '']}
          key={id}
          className={cls['description__child']}
        >
          <span onClick={() => setActive((prev) => (prev === id ? null : id))}>
            {title ? title : 'Item description'}
            {active === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </span>
          <ul>
            <li>{description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
