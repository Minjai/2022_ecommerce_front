import PageTitle from '../components/elements/UI/PageTitle';
import PageWrapper from '../components/layouts/PageWrapper';
import AboutUsInfo from '../components/partials/AboutUsInfo';
import ContactUs from '../components/partials/ContactUs';

const AboutUs = () => {
  return (
    <PageWrapper>
      <div className="container cart-wrapper">
        <PageTitle>About Us</PageTitle>
        <AboutUsInfo />
        <ContactUs/>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
