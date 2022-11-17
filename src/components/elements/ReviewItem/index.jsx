import cls from './reviewItem.module.scss'; 
import Rating from '../UI/Rating';

const ReviewItem = ({ review }) => {
  const { title, image, category, rating, user, date, content } = review;

  return (
    <div className={cls['review']}>
      <div className={cls['review-image']}>
        <img src={image} alt="" />
      </div>
      <div className={cls['review-body']}>
        <div className={cls['review-body__title']}>
          <span>{category}</span>
          <Rating productRating={rating} />
        </div>
        <h4>{title}</h4>
        <span>
          {user} {date}
        </span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
