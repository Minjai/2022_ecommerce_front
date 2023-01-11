import { useGetReviewsQuery } from '../../../store/query/reviewQuery';
import { setContent, setModal } from '../../../store/slices/modal';
import { setPickedReview } from '../../../store/slices/review';
import { dateFilter } from '../../../utils/dateFilter';
import { dateParser } from '../../../utils/dateParser';
import { useDispatch, useSelector } from 'react-redux';
import { modalPaths } from '../../../constants/paths';
import EmptyText from '../../elements/UI/EmptyText';
import Pagination from '../../elements/Pagination';
import { AiOutlineDown } from 'react-icons/ai';
import Loader from '../../elements/UI/Loader';
import Rating from '../../elements/UI/Rating';
import { useState, useEffect } from 'react';
import cls from './userList.module.scss';

const UserReviewList = () => {
  const [select, setSelect] = useState('Select Range');
  const [isRange, setRange] = useState(false);
  const [date, setDate] = useState('');

  const { userInfo } = useSelector((state) => state.user);

  const handleRange = (str) => {
    setSelect(str);
    setRange(false);
  };

  const [page, setPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [pageEnd, setPageEnd] = useState(3);

  const { data, isLoading } = useGetReviewsQuery(
    { userId: userInfo.id, page, offset, date },
    {
      refetchOnMountOrArgChange: true,
    }
  );

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

  useEffect(() => {
    if (select === 'Past 3 months') {
      setDate(dateFilter(3));
    } else if (select === 'Past 6 months') {
      setDate(dateFilter(6));
    } else if (select === 'Past 12 months') {
      setDate(dateFilter(12));
    } else {
      setDate('');
    }
  }, [select]);

  const dispatch = useDispatch()

  const reviewHandler = (review) => {
    dispatch(setPickedReview(review))
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.REVIEW_INFO));
  };

  return (
    <div className={cls['review']}>
      <div className={cls['review__header']}>
        <h3>My reviews</h3>
        <div className={cls['review__header__child']}>
          <div>
            <span className={cls[isRange ? 'active' : '']}>
              <p onClick={() => setRange((prev) => !prev)}>
                {select} <AiOutlineDown />
              </p>
              <ul>
                <li onClick={() => handleRange('Past 3 months')}>
                  Past 3 months
                </li>
                <li onClick={() => handleRange('Past 6 months')}>
                  Past 6 months
                </li>
                <li onClick={() => handleRange('Past 12 months')}>
                  Past 12 months
                </li>
                <li onClick={() => handleRange('All order')}>All order</li>
              </ul>
            </span>
          </div>
          <p>{data?.count} Reviews</p>
        </div>
      </div>
      <div className={cls['review__body']}>
        {isLoading ? (
          <Loader />
        ) : data.results.length > 0 ? (
          data.results.map((item) => (
            <div onClick={() => reviewHandler(item)} key={item?.comment} className={cls['review__body__child']}>
              <div>
                <span>{item?.id}</span>
                <img
                  src={
                    item?.product?.images.find((item) => item.is_feature === true)
                      ?.image
                  }
                  alt="review-list"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate, illum iste natus impedit explicabo enim dignissimos eos et cumque nemo praesentium ipsum sint, molestias at corporis aut, eligendi quos?</p>
              </div>
              <div>
                <Rating productRating={item?.stars} />
                <p>{dateParser(item?.created_at)}</p>
              </div>
            </div>
          ))
        ) : (
          <EmptyText text={'reviews'} />
        )}
      </div>
      {paginationOptions.pageCount > paginationOptions.limit && (
        <Pagination options={paginationOptions} />
      )}
    </div>
  );
};

export default UserReviewList;
