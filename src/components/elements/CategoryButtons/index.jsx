import cls from './categoryButtons.module.scss';

const CategoryButtons = ({ data }) => {
  return (
    <div className={cls['category-buttons']}>
      {data.map(({ category, id, active }) => (
        <div
          id={cls[active ? 'active' : '']}
          key={id}
          className={cls['category-buttons__child']}
        >
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
