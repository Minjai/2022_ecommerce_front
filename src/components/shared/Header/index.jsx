import {
  headerLocalMidLinks,
  headerLowerLinks,
  headerPrivateMidLinks,
} from '../../../constants/header';
import { useGetAllCategoriesQuery } from '../../../store/query/productQuery';
import { useGetCurrencyQuery } from '../../../store/query/currency';
import { setContent, setModal } from '../../../store/slices/modal';
import { setCategoryData } from '../../../store/slices/category';
import { initCurrency } from '../../../store/slices/currency';
import { modalPaths, paths } from '../../../constants/paths';
import { setAuth } from '../../../store/slices/user/user';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../../elements/SearchInput';
import RouterLink from '../../elements/RouterLink';
import { BsChevronDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Logo from '../../elements/UI/Logo';
import cls from './header.module.scss';

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.cart);
  const [subCategory, setSubCategory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alarmHandler = () => {
    dispatch(setContent(modalPaths.ALARM));
    dispatch(setModal(true));
  };

  const logOutHandler = () => {
    dispatch(setAuth(false));
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    navigate(paths.HOME);
  };

  const { data } = useGetAllCategoriesQuery();

  const handleCategory = (item) => {
    dispatch(setCategoryData(item));
    navigate(`/${paths.CATEGORY}`);
  };

  const { data: currencyData } = useGetCurrencyQuery();
  const { activeCurrency } = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(initCurrency(currencyData?.results[0]));
  }, [currencyData?.results, dispatch]);

  return (
    <header>
      <div className={cls['header-upper']}>
        <button onClick={() => navigate('/')}>
          [Notice] Free Shipping Worldwide
        </button>
      </div>
      <div className={cls['header-mid']}>
        <button onClick={() => navigate('/')}>
          <Logo />
        </button>
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
            {carts.length > 0 && <b>{carts.length}</b>}
          </ul>
        </div>
      </div>
      <div className={cls['header-lower']}>
        <div>
          <ul>
            {headerLowerLinks.map(({ id, text, icon, to, list, isClick }) => (
              <li key={id}>
                {isClick ? (
                  <span>
                    {' '}
                    {text}
                    {icon}
                  </span>
                ) : (
                  <RouterLink to={to}>
                    {text}
                    {icon}
                  </RouterLink>
                )}
                {list && (
                  <div
                    className={
                      cls[
                        to === `${paths.CUSTOMER_HELP}/${paths.NEWS}`
                          ? 'customer-list'
                          : ''
                      ]
                    }
                  >
                    <ul>
                      {list.map((item) => (
                        <li onClick={() => navigate(item.to)} key={item.id}>
                          {item.text} {item.icon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isClick && (
                  <div
                    onMouseLeave={() => setSubCategory([])}
                    className={
                      cls[to === paths.CATEGORY ? 'category-list' : '']
                    }
                  >
                    <ul>
                      {data?.slice(0, 4).map((item) => (
                        <>
                          <li
                            onMouseEnter={() => setSubCategory(item.children)}
                            onClick={() => handleCategory(item)}
                            key={`${item.id} ${item.title}`}
                          >
                            {item.title} <FiChevronDown />
                          </li>
                          {subCategory.length ? (
                            <div key={item.id} className={cls['subCategory']}>
                              {subCategory.map((item) => (
                                <span
                                  key={item.id}
                                  onClick={() => handleCategory(item)}
                                >
                                  {item.title}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className={cls['header-currency']}>
            <span>
              {activeCurrency?.currency} {activeCurrency?.currency_value}{' '}
              <BsChevronDown />
            </span>
            <div>
              <ul>
                {currencyData?.results.map((item) => (
                  <li
                    onClick={() => dispatch(initCurrency(item))}
                    key={item.id}
                  >
                    {item.currency} {item.currency_value}
                  </li>
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
