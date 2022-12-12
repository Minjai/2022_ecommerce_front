import cls from './reviewItem.module.scss';
import { dateParser } from '../../../utils/dateParser';
import Rating from '../UI/Rating';

const ReviewItem = ({ review }) => {
  const { comment, stars, product, user, created_at } = review;

  return (
    <div className={cls['review']}>
      <div className={cls['review-image']}>
        <img
          src={product.images.find((item) => item.is_feature).image}
          alt="review-pic"
        />
      </div>
      <div className={cls['review-body']}>
        <div className={cls['review-body__title']}>
          <span>{product.category.title}</span>
          <Rating productRating={stars} />
        </div>
        <h4>{product.product_name}</h4>
        <span>
          {user.username} {dateParser(created_at)}
        </span>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
