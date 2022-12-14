import { useGetAllReviewsQuery } from '../../../store/query/reviewQuery';
import ReviewsCarousel from '../../elements/ReviewsCarousel';
import ReviewSkeleton from '../../skeletons/ReviewSkeleton';
import Description from '../../elements/UI/Description';
import EmptyText from '../../elements/UI/EmptyText';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import cls from './mainReviews.module.scss';
import { AiOutlineRight } from 'react-icons/ai';

const MainReviews = ({ productId = '' }) => {
  const navigate = useNavigate();

  const reviewHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.REVIEW}`);
  };

  const { data, isLoading } = useGetAllReviewsQuery(
    { productId },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className={cls['reviews']}>
      <div className={cls['reviews__header']}>
        <Description>Reviews</Description>
        <span onClick={reviewHandler}>
          View More <AiOutlineRight />
        </span>
      </div>
      {isLoading ? (
        <ReviewSkeleton />
      ) : data?.results.length > 0 ? (
        <ReviewsCarousel data={data?.results} />
      ) : (
        <EmptyText text={'review'} />
      )}
    </div>
  );
};

export default MainReviews;
