import { useGetSingleNewQuery } from '../store/query/newsQuery';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import EmptyText from '../components/elements/UI/EmptyText';
import ContactUs from '../components/partials/ContactUs';
import NewInfo from '../components/partials/NewInfo';
import Loader from '../components/elements/UI/Loader';
import { useParams } from 'react-router-dom';

const SingleNew = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleNewQuery({ id });

  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>News</PageTitle>
        {isLoading ? (
          <Loader />
        ) : data ? (
          <NewInfo info={data} id={id} />
        ) : (
          <EmptyText text={'new'} />
        )}
        <ContactUs />
      </div>
    </PageWrapper>
  );
};

export default SingleNew;
