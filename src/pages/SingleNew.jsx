import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import ContactUs from '../components/partials/ContactUs';
import NewInfo from '../components/partials/NewInfo';
import { useParams } from 'react-router-dom';

const SingleNew = () => {
  const { id } = useParams();

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>News</PageTitle>
        <NewInfo id={id} />
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default SingleNew;
