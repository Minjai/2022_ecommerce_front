import cls from './pagination.module.scss';
import { useEffect } from 'react';

const Pagination = ({ options = {} }) => {
  const {
    limit,
    pageCount,
    page,
    setPage,
    pageEnd,
    setPageEnd,
    pageStart,
    setPageStart,
    setOffset,
  } = options;

  const pagesCount = Math.ceil(pageCount / limit);
  const pagesData = [];

  for (let i = 0; i < pagesCount; i++) {
    pagesData.push(i);
  }

  const paginateDecrement = (count) => {
    if (count > 0 && count !== 1) {
      setPage(count);
      setPageStart((prev) => prev - 1);
      setPageEnd((prev) => prev - 1);
      setOffset(count * limit - limit);
    } else {
      setPage(count);
      setOffset(0);
    }
  };

  const paginateIncrement = (count) => {
    if (page !== pageCount) {
      setPage(count);
      setPageStart((prev) => prev + 1);
      setPageEnd((prev) => prev + 1);
      setOffset(count * limit - limit);
    }
  };

  const paginateElements = (count) => (
    <span
      onClick={() =>
        count === pageEnd
          ? paginateIncrement(count)
          : count === pageStart + 1
          ? paginateDecrement(count)
          : (setOffset(limit * count - limit), setPage(count))
      }
      key={count}
      className={[cls[page === count && 'pagination__list_active']]}
    >
      {count}
    </span>
  );

  useEffect(() => {
    if (page === pagesData.length) {
      setPageStart(pagesData.length - 3);
      setPageEnd(pagesData.length);
    }
  }, [page]);

  return (
    <div className={cls['pagination']}>
      {pagesData.length > 3 ? (
        <div className={cls['pagination__list']}>
          {pagesData
            .slice(pageStart, pageEnd)
            .map((count) => paginateElements(count + 1))}
          {pagesData.length - pageEnd + 1 > 1 && (
            <>
              <p
                style={{
                  display: pagesData.length - pageEnd > 1 ? 'block' : 'none',
                }}
              >
                ...
              </p>
              <span
                className={
                  cls[page === pagesData.length && 'pagination__list_active']
                }
                onClick={() => (
                  setPage(pagesData.length),
                  setOffset(limit * pagesData.length - limit)
                )}
              >
                {pagesData.length}
              </span>
            </>
          )}
        </div>
      ) : (
        <div className={cls['pagination__list']}>
          {pagesData.map((count) => paginateElements(count + 1))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
