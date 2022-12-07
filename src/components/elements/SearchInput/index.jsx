import { getSearchApi } from '../../../store/slices/search';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { TfiSearch } from 'react-icons/tfi';
import cls from './searchInput.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchHandler = async () => {
    dispatch(getSearchApi({ str: search }))
    navigate(`/${paths.SEARCH}`)
  }

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
