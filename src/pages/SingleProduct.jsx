import { useGetConsultationsQuery } from '../store/query/consultationQuery';
import ProductDescription from '../components/partials/ProductDescription';
import { useGetSingleProductQuery } from '../store/query/productQuery';
import ConsultationList from '../components/lists/ConsultationList';
import Description from '../components/elements/UI/Description';
import ProductInfo from '../components/partials/ProductInfo';
import MainReviews from '../components/partials/MainReviews';
import EmptyText from '../components/elements/UI/EmptyText';
import PageWrapper from '../components/layouts/PageWrapper';
import Loader from '../components/elements/UI/Loader';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery({ id });

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data: generalData, isLoading: isLoad } = useGetConsultationsQuery(
    {
      token: localStorage.getItem('accessToken'),
      page,
      offset,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const paginationOptions = {
    limit: 5,
    pageCount: generalData?.count,
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
      <div className="container w-966">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ProductInfo data={data} />
            <ProductDescription list={data.descriptions} />
          </>
        )}
        <MainReviews productId={id} />
        <Description>1:1 General Consultations</Description>
        {isLoad ? (
          <Loader />
        ) : generalData?.results ? (
          <ConsultationList
            options={paginationOptions}
            data={generalData?.results}
            bottom={true}
          />
        ) : (
          <EmptyText text={'general consultation'} />
        )}
      </div>
    </PageWrapper>
  );
};

export default SingleProduct;
