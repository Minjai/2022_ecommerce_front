import ProductDescription from '../components/partials/ProductDescription';
import ReviewsCarousel from '../components/elements/ReviewsCarousel';
import ProductInfo from '../components/partials/ProductInfo';
import PageWrapper from '../components/layouts/PageWrapper';

const SingleProduct = () => {
  return (
    <PageWrapper>
      <div className="container">
        <ProductInfo />
        <ProductDescription />
        <ReviewsCarousel />
      </div>
    </PageWrapper>
  );
};

export default SingleProduct;
