import FeaturedCategory from '../components/partials/FeaturedCategory';
import Recommendations from '../components/partials/Recommendations';
import PopularProducts from '../components/partials/PopularProducts';
import MainCarousel from '../components/elements/MainCarousel';
import MainReviews from '../components/partials/MainReviews';
import PageWrapper from '../components/layouts/PageWrapper';
import Discover from '../components/partials/Discover';

const Home = () => {
  return (
    <PageWrapper index={true}>
      <div className="container">
        <MainCarousel />
        <FeaturedCategory />
        <PopularProducts />
        <Recommendations/>
        <MainReviews/>
        <Discover/>
      </div>
    </PageWrapper>
  );
};

export default Home;
