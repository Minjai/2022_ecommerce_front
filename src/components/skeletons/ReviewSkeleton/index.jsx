import cls from './reviewSkeleton.module.scss';

const ReviewSkeleton = () => {
  return (
    <div className={cls['review-skeleton']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ReviewSkeleton;
