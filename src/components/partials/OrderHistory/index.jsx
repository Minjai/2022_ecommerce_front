import { useGetOrderItemsQuery } from '../../../store/query/orderQuery';
import Pagination from '../../elements/Pagination';
import { AiOutlineDown } from 'react-icons/ai';
import OrderList from '../../lists/OrderList';
import cls from './orderHistory.module.scss';
import { DateRangePicker } from 'rsuite';
import { useState } from 'react';
import 'rsuite/dist/rsuite.css';

const OrderHistory = () => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

  const { data , error} = useGetOrderItemsQuery()

  console.log(error);

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  return (
    <div className={cls['points']}>
      <h3 className={cls['points__header']}>
        Order History
        <span>Total 3 order</span>
      </h3>
      <div className={cls['points__body']}>
        <span className={cls[isRange ? 'active' : '']}>
          <p onClick={() => setRange((prev) => !prev)}>
            {select} <AiOutlineDown />
          </p>
          <ul>
            <li onClick={() => handleRange('Past 3 months')}>Past 3 months</li>
            <li onClick={() => handleRange('Past 6 months')}>Past 6 months</li>
            <li onClick={() => handleRange('Past 12 months')}>
              Past 12 months
            </li>
            <li onClick={() => handleRange('All order')}>All order</li>
          </ul>
        </span>
        <DateRangePicker
          showOneCalendar
          ranges={[]}
          className={cls['picker']}
          placeholder="DD-MM-YYYY"
          format={'dd-MM-yyyy'}
        />
        <button>Search</button>
      </div>
      <OrderList />
      <Pagination />
    </div>
  );
};

export default OrderHistory;
