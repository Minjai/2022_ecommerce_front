import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { paths } from '../../../../constants/paths';
import cls from './checkoutContact.module.scss';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';

const CheckoutContact = () => {
  const [country, setCountry] = useState('Select country');
  const [list, setList] = useState(false);

  const newCountryHandler = (str) => {
    setCountry(str);
    setList(false);
  };

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_THIRD}`
  );

  return (
    <div className={cls['contact']}>
      <h3>Contact Infomation</h3>

      <div className={cls['contact__header']}>
        <p>User Name: Test test</p>
        <p>Email: email@gmail.com</p>
      </div>
      <div className={cls['contact__body']}>
        <h3>Delivery Address</h3>
        <form className="flex" action="address">
          <input
            type="text"
            className={cls['half']}
            placeholder={'First Name'}
          />
          <input
            type="text"
            className={cls['half']}
            placeholder={'Last Name'}
          />
          <input
            type="text"
            className={cls['full']}
            placeholder={'Address 1'}
          />
          <input
            type="text"
            className={cls['full']}
            placeholder={'Address 2'}
          />
          <input type="text" className={cls['half']} placeholder={'Cyty'} />
          <input type="text" className={cls['half']} placeholder={'State'} />
          <input
            type="text"
            className={cls['half']}
            placeholder={'Zip / Postal Code'}
          />
          <div id={cls[list ? 'active' : '']} className={cls['half']}>
            <span onClick={() => setList((prev) => !prev)}>
              {country} <AiOutlineDown />
            </span>
            <ul>
              <li onClick={() => newCountryHandler('Berlin')}>Berlin</li>
              <li onClick={() => newCountryHandler('New York')}>New York</li>
            </ul>
          </div>
          <input
            type="text"
            className={cls['full']}
            placeholder={'Phone Number'}
          />
        </form>
      </div>
      <div className={cls['contact__points']}>
        <h3>Apply points</h3>
        <p>You have 1000 points available.</p>
        <span>
          <input type="text" placeholder="Please enter the amount points" />
          <button>Apply Points</button>
        </span>
      </div>
      <CheckoutButtons prev={backBtnHandler} next={nextBtnhandler} />
    </div>
  );
};

export default CheckoutContact;
