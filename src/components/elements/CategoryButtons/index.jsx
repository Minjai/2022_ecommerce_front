import cls from './categoryButtons.module.scss';
import { useDispatch } from 'react-redux';

const CategoryButtons = ({ data, picker }) => {
  const dispatch = useDispatch();

  return (
    <div className={cls['category-buttons']}>
      {data?.map(({ title, isActive, id }) => (
        <div
          onClick={() => dispatch(picker({ title, id }))}
          id={cls[isActive ? 'active' : '']}
          key={id}
          className={cls['category-buttons__child']}
        >
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
