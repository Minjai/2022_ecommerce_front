import cls from './itemSkeleton.module.scss';

const ItemSkeleton = () => {
  return (
    <div className={cls['item-skeleton']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ItemSkeleton;
