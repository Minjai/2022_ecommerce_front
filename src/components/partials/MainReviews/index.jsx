import ReviewsCarousel from '../../elements/ReviewsCarousel';
import Description from '../../elements/UI/Description';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import cls from './mainReviews.module.scss';

const MainReviews = () => {
  const navigate = useNavigate();

  const reviewHandler = () => {
    window.scrollTo(window.scrollX, 150);
    navigate(paths.REVIEW);
  };

  return (
    <div className={cls['reviews']}>
      <div className={cls['reviews__header']}>
        <Description>Reviews</Description>
        <span onClick={reviewHandler}>View More</span>
      </div>
      <ReviewsCarousel />
    </div>
  );
};

export default MainReviews;
