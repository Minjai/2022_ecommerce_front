import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import { useGetCountriesQuery } from '../../../../store/query/country';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { setDelivery } from '../../../../store/slices/delivery';
import { axiosInstance } from '../../../../constants/axios';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '../../../../constants/paths';
import cls from './checkoutContact.module.scss';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import { setPoints } from '../../../../store/slices/points';

const CheckoutContact = () => {
  const [country, setCountry] = useState({ title: 'Select country' });
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

  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const newCountryHandler = (item) => {
    setCountry(item);
    setList(false);
  };

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_THIRD}`
  );

  const { data } = useGetCountriesQuery();

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        'orders/delivery_address/',
        {
          first_name: state.firstName,
          last_name: state.lastName,
          address_1: state.addressOne,
          address_2: state.addressTwo,
          city: state.city,
          state: state.state,
          zip_code: state.zipCode,
          country: country.id,
          phone_number: state.phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      dispatch(setDelivery({ ...response.data, countryName: country.title }));
      nextBtnhandler();
    } catch (error) {
      console.log(error.response);
    }
  };

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
            placeholder={'City'}
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
              {country.title} <AiOutlineDown />
            </span>
            <ul>
              {data?.results.map((item) => (
                <li key={item.id} onClick={() => newCountryHandler(item)}>
                  {item.title}
                </li>
              ))}
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
        <p>You have {userInfo.point} points available.</p>
        <span>
          <input
            value={state.points}
            onChange={(e) =>
              setState((prev) => ({ ...prev, points: e.target.value }))
            }
            type="text"
            placeholder="Please enter the amount points"
          />
          <button onClick={() => dispatch(setPoints(state.points))}>Apply Points</button>
        </span>
      </div>
      <CheckoutButtons prev={backBtnHandler} next={handleSubmit} />
    </div>
  );
};

export default CheckoutContact;
