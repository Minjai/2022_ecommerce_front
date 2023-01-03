import { getSearchApi } from '../../../store/slices/search';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import cls from './searchInput.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = () => {
    dispatch(getSearchApi({ str: search }));
    navigate(`/${paths.SEARCH}`);
    setSearch('');
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (search.length > 0) {
        if (event.key === 'Enter') {
          dispatch(getSearchApi({ str: search }));
          navigate(`/${paths.SEARCH}`);
          setSearch('');
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [search, dispatch]);

  return (
    <div className={cls['search-input']}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for items"
      />
      <button onClick={searchHandler}>
        <TfiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
