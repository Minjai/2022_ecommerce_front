import { setContent, setModal } from '../../../store/slices/modal';
import { setActiveBurger } from '../../../store/slices/burger';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { modalPaths } from '../../../constants/paths';
import cls from './mobileHeader.module.scss';
import { TfiSearch } from 'react-icons/tfi';
import { VscBell } from 'react-icons/vsc';
import Logo from '../../elements/UI/Logo';
import { useDispatch } from 'react-redux';

const MobileHeader = () => {
  const dispatch = useDispatch();

  const setModalHandler = () => {
    dispatch(setActiveBurger(true));
  };

  const searchModalHandler = () => {
    dispatch(setContent(modalPaths.SEARCH));
    dispatch(setModal(true));
  };

  return (
    <header className={cls['header']}>
      <div className={cls['header__title']}>
        <p>Free Shipping Worldwide</p>
      </div>
      <div className={cls['header__body']}>
        <div className={cls['header__left']}>
          <button onClick={setModalHandler} className={cls['header-burger']}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button onClick={searchModalHandler} className={cls['header-search']}>
            <TfiSearch />
          </button>
        </div>
        <Logo />
        <div className={cls['header-right']}>
          <ul>
            <li>
              <span>
                <VscBell />
              </span>
            </li>
            <li>
              <span>
                <AiOutlineShoppingCart />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
