import CustomerSearch from '../../components/elements/CustomerSearch';
import { useSearchDebounce } from '../../hooks/useSearchDebounce';
import EmptyText from '../../components/elements/UI/EmptyText';
import { useGetNewsQuery } from '../../store/query/newsQuery';
import ContactUs from '../../components/partials/ContactUs';
import Loader from '../../components/elements/UI/Loader';
import NewsList from '../../components/lists/NewsList';
import { useState } from 'react';

const News = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearch, setSearch] = useState(false);

  const [page, setPage] = useState(1)
  const [pageStart, setPageStart] = useState(0)
  const [offset, setOffset] = useState(0)
  const [pageEnd, setPageEnd] = useState(3)

  const newsSearch = useSearchDebounce(isSearch, searchValue);
  const { data, isLoading } = useGetNewsQuery(
    {
      page,
      offset,
      newsSearch,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  
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
      <CustomerSearch options={options} placeholder={'news'} />
      {isLoading ? (
        <Loader />
      ) : data?.results.length > 0 ? (
        <NewsList options={paginationOptions} data={data} />
      ) : (
        <EmptyText text={'news'} />
      )}
      <ContactUs />
    </>
  );
};

export default News;
