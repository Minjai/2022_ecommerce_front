import { useGetReviewsQuery } from '../../../store/query/reviewQuery';
import EmptyText from '../../elements/UI/EmptyText';
import Pagination from '../../elements/Pagination';
import { AiOutlineDown } from 'react-icons/ai';
import Loader from '../../elements/UI/Loader';
import Rating from '../../elements/UI/Rating';
import { useSelector } from 'react-redux';
import cls from './userList.module.scss';
import { useState } from 'react';

const UserReviewList = () => {
  const [select, setSelect] = useState('select range');
  const [isRange, setRange] = useState(false);

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
    { userId: userInfo.id, page, offset },
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
          data.results.map(({ comment, product, stars, id }) => (
            <div key={comment} className={cls['review__body__child']}>
              <div>
                <span>{id}</span>
                <img
                  src={
                    product?.images.find((item) => item.is_feature === true)
                      .image
                  }
                  alt="review-list"
                />
                <p>{comment}</p>
              </div>
              <div>
                <Rating productRating={stars} />
                <p>01/04/2022</p>
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
