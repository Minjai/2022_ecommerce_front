import { setContent, setModal } from '../../../store/slices/modal';
import { setActiveBurger } from '../../../store/slices/burger';
import { modalPaths, paths } from '../../../constants/paths';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './mobileHeader.module.scss';
import { TfiSearch } from 'react-icons/tfi';
import { VscBell } from 'react-icons/vsc';
import Logo from '../../elements/UI/Logo';

const MobileHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.cart)

  const setModalHandler = () => {
    dispatch(setActiveBurger(true));
  };

  const modalHandler = (path) => {
    dispatch(setContent(path));
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
          <button
            onClick={() => modalHandler(modalPaths.SEARCH)}
            className={cls['header-search']}
          >
            <TfiSearch />
          </button>
        </div>
        <span onClick={() => navigate(paths.HOME)}>
          <Logo />
        </span>
        <div className={cls['header-right']}>
          <ul>
            <li>
              <span onClick={() => modalHandler(modalPaths.ALARM)}>
                <VscBell />
              </span>
            </li>
            <li>
              <span onClick={() => navigate(`/${paths.CART}`)}>
                <AiOutlineShoppingCart />
              </span>
              {carts.length > 0 && <b>{carts.length}</b>}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
