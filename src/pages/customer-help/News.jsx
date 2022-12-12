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

  const newsSearch = useSearchDebounce(isSearch, searchValue);
  const { data, isLoading } = useGetNewsQuery(
    {
      newsSearch,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

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
      ) : data?.results.length !== 0 ? (
        <NewsList data={data} />
      ) : (
        <EmptyText text={'news'} />
      )}
      <ContactUs />
    </>
  );
};

export default News;
