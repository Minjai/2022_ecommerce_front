import PaginatedList from '../components/lists/PaginatedList';
import PageWrapper from '../components/layouts/PageWrapper';
import EmptyText from '../components/elements/UI/EmptyText';
import PageTitle from '../components/elements/UI/PageTitle';
import Loader from '../components/elements/UI/Loader';
import { useSelector } from 'react-redux';

const Search = () => {
  const { searchValue, isLoading, searchData } = useSelector(
    (state) => state.search
  );

  return (
    <PageWrapper>
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : searchData?.results?.length > 0 ? (
          <>
            <PageTitle>Results of "{searchValue}"</PageTitle>
            <PaginatedList
              data={searchData?.results}
            />
          </>
        ) : (
          <EmptyText text={'search'} />
        )}
      </div>
    </PageWrapper>
  );
};

export default Search;
