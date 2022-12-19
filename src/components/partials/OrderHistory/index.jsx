import { useGetOrdersQuery } from '../../../store/query/orderQuery';
import { dateRangeParser } from '../../../utils/dateRangeParser';
import { axiosInstance } from '../../../constants/axios';
import Pagination from '../../elements/Pagination';
import { AiOutlineDown } from 'react-icons/ai';
import OrderList from '../../lists/OrderList';
import Loader from '../../elements/UI/Loader';
import cls from './orderHistory.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';

const OrderHistory = () => {
  const [select, setSelect] = useState('select range');
  const [date, setDate] = useState([
    new Date('2000-01-01 01:00:00'),
    new Date('2025-01-01   01:00:00')
  ]);
  const [isRange, setRange] = useState(false);
  const [orders, setOrders] = useState([]);
  const [load, setLoad] = useState(0);
  const [count, setCount] = useState(0);

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { startDate, endDate } = dateRangeParser(date)

  const { userInfo } = useSelector((state) => state.user);

  const { data, isLoading } = useGetOrdersQuery(
    {
      token: localStorage.getItem('accessToken'),
      userId: userInfo.id,
      page,
      offset,
      endDate,
      startDate
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

  const paginationOptions = {
    limit: 4,
    pageCount: data?.count,
    page,
    offset,
    setPage,
    setOffset,
    pageStart,
    setPageStart,
    pageEnd,
    setPageEnd,
  };

  return (
    <div className={cls['points']}>
      <h3 className={cls['points__header']}>
        Order History
        <span>Total {data?.count} orders</span>
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
          onChange={setDate}
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
          {paginationOptions?.pageCount > paginationOptions?.limit && (
            <Pagination options={paginationOptions} />
          )}
        </>
      )}
    </div>
  );
};

export default OrderHistory;
