import {
  currencyLink,
  headerLowerLinks,
  headerMidLinks,
} from '../../../constants/header';
import SearchInput from '../../elements/SearchInput';
import RouterLink from '../../elements/RouterLink';
import { paths } from '../../../constants/paths';
import { BsChevronDown } from 'react-icons/bs';
import Logo from '../../elements/UI/Logo';
import cls from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={cls['header-upper']}>
        <a href="url">Announcement</a>
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
      <div className={cls['header-mid']}>
        <Logo />
        <SearchInput />
        <div className={cls['header-links']}>
          <ul>
            {headerMidLinks.map(({ id, to, text }) => (
              <li key={id}>
                <RouterLink to={to}>{text}</RouterLink>
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
                        : to === paths.CUSTOMER_HELP
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
      </div>
    </header>
  );
};

export default Header;
