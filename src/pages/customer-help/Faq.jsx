import { useGetSearchedFaqsQuery } from '../../store/query/faqQuery';
import { useSearchDebounce } from '../../hooks/useSearchDebounce';
import NewSearch from '../../components/elements/CustomerSearch';
import EmptyText from '../../components/elements/UI/EmptyText';
import ContactUs from '../../components/partials/ContactUs';
import Loader from '../../components/elements/UI/Loader';
import FaqList from '../../components/lists/FaqList';
import { useState } from 'react';

const Faq = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setSearch] = useState(false);

  const searchHook = useSearchDebounce(isSearch, searchValue);
  const { data, isLoading } = useGetSearchedFaqsQuery({
    searchHook
  }, {
    refetchOnMountOrArgChange: true
  });

  const searchButtonHandler = () => {
    setSearch((prev) => !prev);
  };

  const options = {
    searchValue,
    setSearchValue,
    searchButtonHandler,
  };

  console.log(data);

  return (
    <>
      <NewSearch options={options} placeholder={'faqs'} />
      {isLoading ? (
        <Loader />
      ) : data?.results.length !== 0 ? (
        <FaqList data={data} />
      ) : (
        <EmptyText text={'faq'} />
      )}
      <ContactUs />
    </>
  );
};

export default Faq;
