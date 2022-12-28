import { setContent, setModal } from '../../../store/slices/modal';
import { setPickedReview } from '../../../store/slices/review';
import { dateParser } from '../../../utils/dateParser';
import { modalPaths } from '../../../constants/paths';
import { nameClose } from '../../../utils/nameCloser';
import cls from './reviewItem.module.scss';
import { useDispatch } from 'react-redux';
import Rating from '../UI/Rating';

const ReviewItem = ({ review }) => {
  const { comment, stars, product, user, created_at } = review;

  const dispatch = useDispatch();

  const reviewHandler = () => {
    dispatch(setPickedReview(review))
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.REVIEW_INFO));
  };

  return (
    <div onClick={reviewHandler} className={cls['review']}>
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
          {nameClose(user.username)} {dateParser(created_at)}
        </span>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
