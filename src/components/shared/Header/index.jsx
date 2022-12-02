import {
  currencyLink,
  headerLocalMidLinks,
  headerLowerLinks,
  headerPrivateMidLinks,
} from '../../../constants/header';
import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import { setAuth } from '../../../store/slices/user/user';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../../elements/SearchInput';
import RouterLink from '../../elements/RouterLink';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Logo from '../../elements/UI/Logo';
import cls from './header.module.scss';

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const alarmHandler = () => {
    dispatch(setContent(modalPaths.ALARM));
    dispatch(setModal(true));
  };

  const logOutHandler = () => {
    dispatch(setAuth(false))
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('accessToken')
    navigate(paths.HOME)
  }

  return (
    <header>
      <div className={cls['header-upper']}>
        <a href="url">[Notice] Free Shipping Worldwide</a>
      </div>
      <div className={cls['header-mid']}>
        <Logo />
        <SearchInput />
        <div className={cls['header-links']}>
          <ul>
            {isAuth
              ? headerPrivateMidLinks.map(({ id, to, text }) => (
                  <li key={id}>
                    {text === 'Alarm' ? (
                      <span onClick={alarmHandler}>{text}</span>
                    ) : text === 'Log out' ? (
                      <span onClick={logOutHandler}>{text}</span>
                    ) : (
                      <RouterLink to={to}>{text}</RouterLink>
                    )}
                  </li>
                ))
              : headerLocalMidLinks.map(({ id, to, text }) => (
                  <li key={id}>
                    {text === 'Alarm' ? (
                      <span onClick={alarmHandler}>{text}</span>
                    ) : (
                      <RouterLink to={to}>{text}</RouterLink>
                    )}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className={cls['header-lower']}>
        <div>
          <ul>
            {headerLowerLinks.map(({ id, text, icon, to, list }) => (
              <li key={id}>
                <RouterLink to={to}>
                  {text}
                  {icon}
                </RouterLink>
                {list && (
                  <div
                    className={
                      cls[
                        to === paths.CATEGORY
                          ? 'category-list'
                          : to === `${paths.CUSTOMER_HELP}/${paths.NEWS}`
                          ? 'customer-list'
                          : ''
                      ]
                    }
                  >
                    <ul>
                      {list.map((item) => (
                        <li key={item.id}>
                          {item.text} {item.icon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className={cls['header-currency']}>
            <span>
              USD {'($)'} <BsChevronDown />
            </span>
            <div>
              <ul>
                {currencyLink.map(({ id, text }) => (
                  <li key={id}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
