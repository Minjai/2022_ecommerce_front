import ConsultationInfo from '../components/partials/ConsultationInfo';
import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import ContactUs from '../components/partials/ContactUs';

const SingleConsultation = () => {
  return (
    <PageWrapper>
      <div className="container">
        <PageTitle>1 : 1 General Consultation</PageTitle>
        <ConsultationInfo/>
        <ContactUs/>
      </div>
    </PageWrapper>
  );
};

export default SingleConsultation;
