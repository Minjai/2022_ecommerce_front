import ProductDescription from '../components/partials/ProductDescription';
import { useGetSingleProductQuery } from '../store/query/productQuery';
import ConsultationList from '../components/lists/ConsultationList';
import Description from '../components/elements/UI/Description';
import ProductInfo from '../components/partials/ProductInfo';
import MainReviews from '../components/partials/MainReviews';
import PageWrapper from '../components/layouts/PageWrapper';
import Loader from '../components/elements/UI/Loader';
import { useParams } from 'react-router-dom';

const description = [
  {
    id: 1,
    title: 'Description',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
  {
    id: 2,
    title: 'React',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
  {
    id: 3,
    title: 'Redux',
    content:
      'When delivery starts, a notification message is sent to the customer along with the tracking number at the same time. (Send via SMS if there is no notification talk)',
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery({ id });

  return (
    <PageWrapper>
      <div className="container w-966">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ProductInfo data={data} />
            <ProductDescription list={description} />
          </>
        )}
        <MainReviews />
        <Description>1:1 General Consultations</Description>
        <ConsultationList bottom={true} />
      </div>
    </PageWrapper>
  );
};

export default SingleProduct;
