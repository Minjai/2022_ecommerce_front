import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import PolicyInfo from '../components/partials/PolicyInfo';

const Policy = () => {
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>Our Policy</PageTitle>
        <PolicyInfo/>
      </div>
    </PageWrapper>
  );
};

export default Policy;
