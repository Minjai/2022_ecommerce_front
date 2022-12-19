import ReviewsCarousel from '../components/elements/ReviewsCarousel';
import {
  useGetAllReviewsQuery,
  useGetReviewsQuery,
} from '../store/query/reviewQuery';
import Description from '../components/elements/UI/Description';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import EmptyText from '../components/elements/UI/EmptyText';
import Pagination from '../components/elements/Pagination';
import ReviewsList from '../components/lists/ReviewsList';
import ContactUs from '../components/partials/ContactUs';
import Loader from '../components/elements/UI/Loader';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Reviews = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data, isLoading } = useGetReviewsQuery(
    { userId: userInfo.id, page, offset },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: reviewData, isLoading: reviewLoading } = useGetAllReviewsQuery({
    refetchOnMountOrArgChange: true,
  });

  const paginationOptions = {
    limit: 4,
    pageCount: data?.count,
    page,
    offset,
    setPage,
    setOffset,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Review</PageTitle>
        <br />
        {reviewLoading ? (
          <Loader />
        ) : reviewData?.results.length > 0 ? (
          <>
            <Description>Reviews Highlights</Description>
            <ReviewsCarousel data={reviewData?.results} />
          </>
        ) : (
          <EmptyText text={'review'} />
        )}
        {isLoading ? (
          <Loader />
        ) : data?.results.length > 0 ? (
          <>
            <Description>Reviews Library</Description>
            <ReviewsList reviews={data?.results} />
            <Pagination options={paginationOptions} />
          </>
        ) : (
          <EmptyText text={'review'} />
        )}
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default Reviews;
