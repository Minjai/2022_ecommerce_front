import {
  currencyLink,
  headerLowerLinks,
  headerMidLinks,
} from '../../../constants/header';
import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import SearchInput from '../../elements/SearchInput';
import RouterLink from '../../elements/RouterLink';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Logo from '../../elements/UI/Logo';
import cls from './header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  const alarmHandler = () => {
    dispatch(setContent(modalPaths.ALARM));
    dispatch(setModal(true));
  };

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
            {headerMidLinks.map(({ id, to, text }) => (
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
                        : to === `${paths.CUSTOMER_HELP}/`
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
    </header>
  );
};

export default Header;
