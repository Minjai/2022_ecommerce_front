import cls from './categorySkeleton.module.scss';

const CategorySkeleton = () => {
  return (
    <div className={cls['category-skeleton']}>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
      <div className={cls['category-skeleton__child']}></div>
    </div>
  );
};

export default CategorySkeleton;
