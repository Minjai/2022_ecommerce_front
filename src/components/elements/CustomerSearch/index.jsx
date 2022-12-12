import { TfiSearch } from 'react-icons/tfi';
import cls from './customerSearch.module.scss';

const CustomerSearch = ({ placeholder, options = {} }) => {
  const { searchValue, setSearchValue, searchButtonHandler } = options;

  return (
    <div className={cls['customer-input']}>
      <span>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder={`Search for ${placeholder}`}
        />
        <TfiSearch />
      </span>
      <button
        onClick={searchButtonHandler}
        className={cls['customer-input__searchButton']}
      >
        Search
      </button>
    </div>
  );
};

export default CustomerSearch;
