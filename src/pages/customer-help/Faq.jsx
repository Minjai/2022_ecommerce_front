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

  const [page, setPage] = useState(1)
  const [pageStart, setPageStart] = useState(0)
  const [offset, setOffset] = useState(0)
  const [pageEnd, setPageEnd] = useState(3)

  const searchHook = useSearchDebounce(isSearch, searchValue);
  const { data, isLoading } = useGetSearchedFaqsQuery({
    searchHook,
    page,
    offset
  }, {
    refetchOnMountOrArgChange: true
  });

  const paginationOptions = {
    limit: 5,
    pageCount: data?.count,
    page,
    offset,
    setPage,
    setOffset,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };

  const searchButtonHandler = () => {
    setSearch((prev) => !prev);
  };

  const options = {
    searchValue,
    setSearchValue,
    searchButtonHandler,
  };

  return (
    <>
      <NewSearch options={options} placeholder={'faqs'} />
      {isLoading ? (
        <Loader />
      ) : data?.results.length !== 0 ? (
        <FaqList options={paginationOptions} data={data} />
      ) : (
        <EmptyText text={'faq'} />
      )}
      <ContactUs />
    </>
  );
};

export default Faq;
