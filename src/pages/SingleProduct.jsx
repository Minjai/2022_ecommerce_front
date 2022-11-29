import ProductDescription from '../components/partials/ProductDescription';
import ConsultationList from '../components/lists/ConsultationList';
import Description from '../components/elements/UI/Description';
import ProductInfo from '../components/partials/ProductInfo';
import MainReviews from '../components/partials/MainReviews';
import PageWrapper from '../components/layouts/PageWrapper';

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
  return (
    <PageWrapper>
      <div className="container">
        <ProductInfo />
        <ProductDescription list={description} />
        <MainReviews/>
        <br />
        <Description>1:1 General Consultations</Description>
        <ConsultationList bottom={true} />
      </div>
    </PageWrapper>
  );
};

export default SingleProduct;
