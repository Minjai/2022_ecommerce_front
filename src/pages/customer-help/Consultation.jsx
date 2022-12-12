import { useGetConsultationsQuery } from '../../store/query/consultationQuery';
import ConsultationList from '../../components/lists/ConsultationList';
import EmptyText from '../../components/elements/UI/EmptyText';
import ContactUs from '../../components/partials/ContactUs';
import Loader from '../../components/elements/UI/Loader';

const Consultation = () => {
  const { data, isLoading } = useGetConsultationsQuery(
    localStorage.getItem('accessToken')
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data?.results ? (
        <ConsultationList data={data.results} />
      ) : (
        <EmptyText text={'general consultation'} />
      )}
      <ContactUs />
    </>
  );
};

export default Consultation;
