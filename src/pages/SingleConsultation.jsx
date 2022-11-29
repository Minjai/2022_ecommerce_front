import ConsultationInfo from '../components/partials/ConsultationInfo';
import PageWrapper from '../components/layouts/PageWrapper';
import ContactUs from '../components/partials/ContactUs';

const SingleConsultation = () => {
  return (
    <PageWrapper>
      <div className="container">
        <ConsultationInfo/>
        <ContactUs/>
      </div>
    </PageWrapper>
  );
};

export default SingleConsultation;
