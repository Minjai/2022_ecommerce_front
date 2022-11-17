import ContactUs from '../../components/partials/ContactUs';
import NewSearch from '../../components/elements/NewSearch';
import NewsList from '../../components/lists/NewsList';

const News = () => {
  return (
    <>
      <NewSearch />
      <NewsList />
      <ContactUs />
    </>
  );
};

export default News;
