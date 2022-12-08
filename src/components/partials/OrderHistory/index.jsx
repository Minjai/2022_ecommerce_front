import { useGetOrdersQuery } from '../../../store/query/orderQuery';
import { axiosInstance } from '../../../constants/axios';
import Pagination from '../../elements/Pagination';
import { AiOutlineDown } from 'react-icons/ai';
import OrderList from '../../lists/OrderList';
import Loader from '../../elements/UI/Loader';
import cls from './orderHistory.module.scss';
import { useState, useEffect } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';

const OrderHistory = () => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(0);
  const [count, setCount] = useState(0);

  const { data, isLoading } = useGetOrdersQuery(
    {
      token: localStorage.getItem('accessToken'),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  const getSingleProduct = async (id) => {
    try {
      const response = await axiosInstance.get(`products/products/${id}`);
      return await response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const res = data?.results?.map((elem) => {
      return {
        ...elem,
        order_items: elem.order_items?.map(async (item) => {
          const product = await getSingleProduct(item.product).then((info) => {
            if (item?.product === info?.id) {
              return {
                ...item,
                info,
              };
            } else {
              return item;
            }
          });
          setLoad((prev) => (prev = prev + 1));

          setCount((prev) => (prev = prev + 1));
          return product;
        }),
      };
    });

    const result = res?.map((item) => {
      const infos = [];

      item?.order_items?.map((res) =>
        res.then((r) => {
          infos.push(r);
        })
      );

      return {
        ...item,
        order_items: infos,
      };
    });

    setOrders(result);
  }, [data]);

  return (
    <div className={cls['points']}>
      <h3 className={cls['points__header']}>
        Order History
        <span>Total {data?.results.length} orders</span>
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
      {isLoading || load !== count ? (
        <Loader />
      ) : ( 
        <>
          <OrderList data={orders} />
          {orders?.length > 0 && <Pagination />}
        </>
      )}
    </div>
  );
};

export default OrderHistory;
