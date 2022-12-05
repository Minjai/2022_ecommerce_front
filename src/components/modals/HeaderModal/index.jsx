import {
  AiOutlineDown,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineClose,
} from 'react-icons/ai';
import { setActiveBurger } from '../../../store/slices/burger';
import { useDispatch, useSelector } from 'react-redux';
import RouterLink from '../../elements/RouterLink';
import { paths } from '../../../constants/paths';
import { TbTruckDelivery } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import cls from './headerModal.module.scss';
import Logo from '../../elements/UI/Logo';
import { useState } from 'react';

const HeaderModal = () => {
  const { isActive } = useSelector((state) => state.burger);
  const { isAuth } = useSelector((state) => state.user);
  const [isCurrency, setCurrencty] = useState(false);
  const [isCategory, setCategory] = useState(false);
  const [isCustomer, setCustomer] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModalHandler = () => {
    dispatch(setActiveBurger(false));
  };

  const navigateHandler = (path) => {
    closeModalHandler();
    navigate(path);
  };

  return (
    <div id={cls[isActive ? 'modal_active' : '']} className={cls['modal']}>
      <div className={cls['modal-wrapper']}>
        <div className={cls['modal-container']}>
          <div className={cls['modal-wrapper__container']}>
            <div className={cls['modal-wrapper__header']}>
              <Logo />
              <span onClick={() => dispatch(setActiveBurger(false))}>
                <AiOutlineClose />
              </span>
            </div>
          </div>
          <div className={cls['modal-wrapper__mid']}>
            <div className={cls['modal-wrapper__container']}>
              <div className={cls['modal-wrapper__mid__links']}>
                {isAuth ? (
                  <h3>Hello User Name</h3>
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
                  <p>USD ($)</p> <AiOutlineDown />
                </span>
                <ul>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cls['modal-wrapper__container']}>
            <div className={cls['modal-wrapper__body']}>
              <div className={cls['modal-wrapper__body__userLinks']}>
                <span
                  onClick={() =>
                    navigateHandler(isAuth ? `/${paths.MY_PAGE}/${paths.USER_PROFILE}` : `/${paths.SIGNUP}`)
                  }
                >
                  <AiOutlineUser />
                  <p>My Page</p>
                </span>
                <span onClick={() => navigateHandler(`/${paths.CART}`)}>
                  <AiOutlineShoppingCart />
                  <p>Cart</p>
                </span>
                <span
                  onClick={() =>
                    navigateHandler(isAuth ? `/${paths.MY_PAGE}/${paths.ORDER_HISTORY}` : `/${paths.SIGNUP}`)
                  }
                >
                  <TbTruckDelivery />
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
                    <AiOutlineDown />
                  </span>
                  <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                  </ul>
                </div>
                <div>
                  <RouterLink to={`/${paths.BEST}`}>
                    <p onClick={closeModalHandler}>Best</p>
                  </RouterLink>
                </div>
                <div className={cls[isCustomer ? 'active' : '']}>
                  <span onClick={() => setCustomer((prev) => !prev)}>
                    Customer Help <AiOutlineDown />
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
              {isAuth && <button className={cls['full']}>Log out</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
