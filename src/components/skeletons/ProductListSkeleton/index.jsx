import cls from './productSkeleton.module.scss';


const ProductListSkeleton = () => {
  return (
    <div className={cls['product-skeleton']}>
      <div className={cls['product-skeleton__child']}></div>
      <div className={cls['product-skeleton__child']}></div>
      <div className={cls['product-skeleton__child']}></div>
      <div className={cls['product-skeleton__child']}></div>
    </div>
  );
};

export default ProductListSkeleton;
