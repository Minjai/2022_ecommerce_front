import ReviewItem from '../../elements/ReviewItem';
import cls from './reviewsList.module.scss';

const ReviewsList = ({ reviews }) => {
  return (
    <div className={cls['review-list']}>
      {reviews.map((item) => (
        <div key={item.id} className={cls['review-list__child']}>
          <ReviewItem review={item} />
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
