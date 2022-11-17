import CostumerForm from '../components/partials/CostumerForm';
import PageWrapper from '../components/layouts/PageWrapper';
import ContactUs from '../components/partials/ContactUs';

const CustomerPost = () => {
  return (
    <PageWrapper>
      <div className="container">
        <CostumerForm />
        <ContactUs/>
      </div>
    </PageWrapper>
  );
};

export default CustomerPost;
