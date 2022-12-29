import { useGetAllCategoriesQuery } from '../../../store/query/productQuery';
import { setCategoryData } from '../../../store/slices/category';
import { setActiveBurger } from '../../../store/slices/burger';
import { setAuth } from '../../../store/slices/user/user';
import { useDispatch, useSelector } from 'react-redux';
import RouterLink from '../../elements/RouterLink';
import { paths } from '../../../constants/paths';
import { AiOutlineClose } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import cls from './headerModal.module.scss';
import Logo from '../../elements/UI/Logo';
import { useEffect, useState } from 'react';
import { useGetCurrencyQuery } from '../../../store/query/currency';
import { initCurrency } from '../../../store/slices/currency';

const HeaderModal = () => {
  const { isActive } = useSelector((state) => state.burger);
  const { isAuth } = useSelector((state) => state.user);
  const [isCurrency, setCurrencty] = useState(false);
  const [isCategory, setCategory] = useState(false);
  const [isCustomer, setCustomer] = useState(false);

  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModalHandler = () => {
    dispatch(setActiveBurger(false));
  };

  const navigateHandler = (path) => {
    closeModalHandler();
    navigate(path);
  };

  const handleCategory = (item) => {
    dispatch(setCategoryData(item));
    navigate(`/${paths.CATEGORY}`);
    closeModalHandler();
  };

  const logOutHandler = () => {
    dispatch(setAuth(false));
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    navigate(paths.HOME);
  };

  const { data } = useGetAllCategoriesQuery();
  const { data: currencyData } = useGetCurrencyQuery();
  const { activeCurrency } = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(initCurrency(currencyData?.results[0]));
  }, [currencyData?.results, dispatch]);

  return (
    <div id={cls[isActive ? 'modal_active' : '']} className={cls['modal']}>
      <div className={cls['modal-wrapper']}>
        <div className={cls['modal-container']}>
          <div className={cls['modal-wrapper__container']}>
            <div className={cls['modal-wrapper__header']}>
              <Logo />
              <span onClick={closeModalHandler}>
                <AiOutlineClose />
              </span>
            </div>
          </div>
          <div className={cls['modal-wrapper__mid']}>
            <div className={cls['modal-wrapper__container']}>
              <div className={cls['modal-wrapper__mid__links']}>
                {isAuth ? (
                  <h3>Hello {userInfo.username}</h3>
                ) : (
                  <>
                    <span onClick={() => navigateHandler(`/${paths.LOGIN}`)}>
                      Log in
                    </span>
                    <span onClick={() => navigateHandler(`/${paths.SIGNUP}`)}>
                      Sign up
                    </span>
                  </>
                )}
              </div>
              <div
                id={cls[isCurrency ? 'active' : '']}
                className={cls['modal-wrapper__mid__currency']}
              >
                <span onClick={() => setCurrencty((prev) => !prev)}>
                  <p>{activeCurrency?.currency} ($)</p> <FiChevronDown />
                </span>
                <ul>
                  {currencyData?.results.map((item) => (
                    <li
                      onClick={() => dispatch(initCurrency(item.currency))}
                      key={item.id}
                    >
                      {item.currency}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={cls['modal-wrapper__container']}>
            <div className={cls['modal-wrapper__body']}>
              <div className={cls['modal-wrapper__body__userLinks']}>
                <span
                  onClick={() =>
                    navigateHandler(
                      isAuth
                        ? `/${paths.MY_PAGE}/${paths.USER_PROFILE}`
                        : `/${paths.SIGNUP}`
                    )
                  }
                >
                  <img src="/img/user-icon.png" alt="user-icon" />
                  <p>My Page</p>
                </span>
                <span onClick={() => navigateHandler(`/${paths.CART}`)}>
                  <img src="/img/cart.png" alt="" />
                  <p>Cart</p>
                </span>
                <span
                  onClick={() =>
                    navigateHandler(
                      isAuth
                        ? `/${paths.MY_PAGE}/${paths.ORDER_HISTORY}`
                        : `/${paths.SIGNUP}`
                    )
                  }
                >
                  <img src="/img/delivery.png" alt="delivery-icon" />
                  <p>Orders</p>
                </span>
              </div>
              <div className={cls['modal-wrapper__body__list']}>
                <div>
                  <RouterLink to={paths.HOME}>
                    <p onClick={closeModalHandler}>Home</p>
                  </RouterLink>
                </div>
                <div className={cls[isCategory ? 'active' : '']}>
                  <span onClick={() => setCategory((prev) => !prev)}>
                    Category
                    <FiChevronDown />
                  </span>
                  <ul>
                    {data?.slice(0, 4).map((item) => (
                      <li onClick={() => handleCategory(item)} key={item.id}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <RouterLink to={`/${paths.BEST}`}>
                    <p onClick={closeModalHandler}>Best</p>
                  </RouterLink>
                </div>
                <div className={cls[isCustomer ? 'active' : '']}>
                  <span onClick={() => setCustomer((prev) => !prev)}>
                    Customer Help <FiChevronDown />
                  </span>
                  <ul>
                    <li
                      onClick={() =>
                        navigateHandler(`/${paths.CUSTOMER_HELP}/${paths.NEWS}`)
                      }
                    >
                      News
                    </li>
                    <li
                      onClick={() =>
                        navigateHandler(`/${paths.CUSTOMER_HELP}/${paths.FAQ}`)
                      }
                    >
                      FAQ
                    </li>
                    <li
                      onClick={() =>
                        navigateHandler(
                          `/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`
                        )
                      }
                    >
                      1:1 General Consultation
                    </li>
                  </ul>
                </div>
                <div onClick={closeModalHandler}>
                  <RouterLink to={`/${paths.REVIEW}`}>
                    <p onClick={closeModalHandler}>Review</p>
                  </RouterLink>
                </div>
                <div onClick={closeModalHandler}>
                  <RouterLink to={`/${paths.ABOUT}`}>
                    <p onClick={closeModalHandler}>About Us</p>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div className={cls['modal-wrapper__container']}>
            <div className={cls['modal-wrapper__footer']}>
              <button
                onClick={() =>
                  navigateHandler(`/${paths.CUSTOMER_HELP}/${paths.FAQ}`)
                }
              >
                FAQ
              </button>
              <button
                onClick={() =>
                  navigateHandler(
                    `/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`
                  )
                }
              >
                1:1 General Consultation
              </button>
              {isAuth && (
                <button onClick={logOutHandler} className={cls['full']}>
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
