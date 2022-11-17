import { TfiSearch } from 'react-icons/tfi';
import cls from './newSearch.module.scss'

const NewSearch = () => {
  return (
    <div className={cls['news-input']}>
      <span>
        <input type="text" placeholder="Search for news" />
        <button>
          <TfiSearch />
        </button>
      </span>
      <button className={cls['news-input__searchButton']}>
        Search
      </button>
    </div>
  );
};

export default NewSearch;
