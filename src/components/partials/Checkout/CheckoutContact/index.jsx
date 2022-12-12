import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { paths } from '../../../../constants/paths';
import cls from './checkoutContact.module.scss';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CheckoutContact = () => {
  const [country, setCountry] = useState('Select country');
  const [list, setList] = useState(false);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    points: '',
  });

  const newCountryHandler = (str) => {
    setCountry(str);
    setList(false);
  };

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_THIRD}`
  );

  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className={cls['contact']}>
      <h3>Contact Infomation</h3>

      <div className={cls['contact__header']}>
        <p>User Name: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
      </div>
      <div className={cls['contact__body']}>
        <h3>Delivery Address</h3>
        <form className="flex" action="address">
          <input
            value={state.firstName}
            onChange={(e) =>
              setState((prev) => ({ ...prev, firstName: e.target.value }))
            }
            type="text"
            className={cls['half']}
            placeholder={'First Name'}
          />
          <input
            value={state.lastName}
            onChange={(e) =>
              setState((prev) => ({ ...prev, lastName: e.target.value }))
            }
            type="text"
            className={cls['half']}
            placeholder={'Last Name'}
          />
          <input
            value={state.addressOne}
            onChange={(e) =>
              setState((prev) => ({ ...prev, addressOne: e.target.value }))
            }
            type="text"
            className={cls['full']}
            placeholder={'Address 1'}
          />
          <input
            value={state.addressTwo}
            onChange={(e) =>
              setState((prev) => ({ ...prev, addressTwo: e.target.value }))
            }
            type="text"
            className={cls['full']}
            placeholder={'Address 2'}
          />
          <input
            type="text"
            value={state.city}
            onChange={(e) =>
              setState((prev) => ({ ...prev, city: e.target.value }))
            }
            className={cls['half']}
            placeholder={'Cyty'}
          />
          <input
            type="text"
            value={state.state}
            onChange={(e) =>
              setState((prev) => ({ ...prev, state: e.target.value }))
            }
            className={cls['half']}
            placeholder={'State'}
          />
          <input
            type="text"
            value={state.zipCode}
            onChange={(e) =>
              setState((prev) => ({ ...prev, zipCode: e.target.value }))
            }
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
            value={state.phoneNumber}
            onChange={(e) =>
              setState((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
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
          <input
            value={state.points}
            onChange={(e) =>
              setState((prev) => ({ ...prev, points: e.target.value }))
            }
            type="text"
            placeholder="Please enter the amount points"
          />
          <button>Apply Points</button>
        </span>
      </div>
      <CheckoutButtons prev={backBtnHandler} next={nextBtnhandler} />
    </div>
  );
};

export default CheckoutContact;
