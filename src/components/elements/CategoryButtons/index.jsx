import { removePickedCategory } from '../../../store/slices/category';
import cls from './categoryButtons.module.scss';
import { useDispatch } from 'react-redux';

const CategoryButtons = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <div className={cls['category-buttons']}>
      {data.map(({ title, isActive }) => (
        <div onClick={() => dispatch(removePickedCategory(title))}
          id={cls[isActive ? 'active' : '']}
          key={title}
          className={cls['category-buttons__child']}
        >
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
