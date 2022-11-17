import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import cls from './headerModal.module.scss';
import { useSelector } from 'react-redux';
import Logo from '../../elements/UI/Logo';
import { GrClose } from 'react-icons/gr';

const HeaderModal = () => {
  const { isActive } = useSelector((state) => state.burger);

  return (
    <div id={cls[isActive ? 'modal_active' : '']} className={cls['modal']}>
      <div className={cls['modal-wrapper']}>
        <div className={cls['modal-wrapper__container']}>
          <div className={cls['modal-wrapper__header']}>
            <Logo />
            <span>
              <GrClose />
            </span>
          </div>
          <div className={cls['modal-wrapper__mid']}>
            <div>
              <a href="#">Log in</a>
              <a href="#">Sign up</a>
            </div>
            <div>
              <span>USD ($)</span>
              <div>
                <ul>
                  <li>Test</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cls['modal-wrapper__body']}>
            <div className={cls['modal-wrapper__userLinks']}>
              <a href="#link">
                <AiOutlineUser />
                <span>My Page</span>
              </a>
              <a href="#link">
                <AiOutlineShoppingCart />
                <span>Cart</span>
              </a>
              <a href="#link">
                <AiOutlineUser />
                <span>Orders</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
