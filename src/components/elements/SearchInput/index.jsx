import { TfiSearch } from 'react-icons/tfi';
import { BsChevronDown } from 'react-icons/bs';
import cls from './searchInput.module.scss';

const SearchInput = () => {
  return (
    <div className={cls['search-input']}>
      <div className={cls['search-input__category']}>
        <span>
          Categories <BsChevronDown />
        </span>
      </div>
      <input type="text" placeholder="Search for items" />
      <button>
        <TfiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
