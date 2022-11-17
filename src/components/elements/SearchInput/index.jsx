import { TfiSearch } from 'react-icons/tfi';
import cls from './searchInput.module.scss';

const SearchInput = () => {
  return (
    <div className={cls['search-input']}>
      <input type="text" placeholder="Search for items" />
      <button>
        <TfiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
