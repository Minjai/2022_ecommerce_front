import PageWrapper from '../components/layouts/PageWrapper';
import NotFound from '../components/partials/NotFound';

const Redirect = () => {
  return (
    <PageWrapper>
      <div className="container">
        <NotFound />
      </div>
    </PageWrapper>
  );
};

export default Redirect;
