import CloseButton from '../../elements/UI/CloseButton';
import { TfiSearch } from 'react-icons/tfi';
import { BsCart } from 'react-icons/bs';
import cls from './search.module.scss';

const MobileSearch = () => {
  return (
    <div className={cls['search']}>
      <CloseButton />
      <div className={cls['search__header']}>
        <input type="search" placeholder="Search" />
        <span>
          <TfiSearch />
        </span>
      </div>
      <div className={cls['search__body']}>
        <div className={cls['search__body__child']}>
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
            alt="search-pic"
          />
          <div className={cls['content']}>
            <p>Product title</p>
            <span>100 ea</span>
            <b>$16.46</b>
          </div>
          <div className={cls['buttons']}>
            <button className={cls['active']}>
              <BsCart />
            </button>
          </div>
        </div>
        <div className={cls['search__body__child']}>
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
            alt="search-pic"
          />
          <div className={cls['content']}>
            <p>Product title</p>
            <span>100 ea</span>
            <b>$16.46</b>
          </div>
          <div className={cls['buttons']}>
            <button>
              <BsCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
