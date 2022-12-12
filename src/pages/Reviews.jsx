import ReviewsCarousel from '../components/elements/ReviewsCarousel';
import { useGetReviewsQuery } from '../store/query/reviewQuery';
import Description from '../components/elements/UI/Description';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import EmptyText from '../components/elements/UI/EmptyText';
import Pagination from '../components/elements/Pagination';
import ReviewsList from '../components/lists/ReviewsList';
import ContactUs from '../components/partials/ContactUs';
import Loader from '../components/elements/UI/Loader';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const { userInfo } = useSelector(state => state.user)

  const { data, isLoading } = useGetReviewsQuery(
    { userId: userInfo.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Review</PageTitle>
        <br />
        {isLoading ? (
          <Loader />
        ) : data?.results !== 0 ? (
          <>
            <Description>Reviews Highlights</Description>
            <ReviewsCarousel data={data.results} />
            <Description>Reviews Library</Description>
            <ReviewsList reviews={data.results} />
            <Pagination />
          </>
        ) : (
          <EmptyText text={'review'}/>
        )}
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default Reviews;
