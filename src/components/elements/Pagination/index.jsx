import { useEffect } from 'react';
import cls from './pagination.module.scss';

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
  } = options;

  const pagesCount = Math.ceil(pageCount / limit);
  const pagesData = [];

  for (let i = 0; i < pagesCount; i++) {
    pagesData.push(i);
  }

  const paginateDecrement = (count) => {
    if (count + 1 > 0 && count + 1 !== 1) {
      setPage(count + 1);
      setPageStart((prev) => prev - 1);
      setPageEnd((prev) => prev - 1);
    }else{
      setPage(count + 1);
    }
  };

  const paginateIncrement = (count) => {
    setPage(count + 1);
    setPageStart((prev) => prev + 1);
    setPageEnd((prev) => prev + 1);
  };

  const paginateElements = (count) => (
    <span
      onClick={() =>
        count + 1 === pageEnd
          ? paginateIncrement(count)
          : count + 1 === pageStart + 1
          ? paginateDecrement(count)
          : setPage(count + 1)
      }
      key={count}
      className={[cls[page === count + 1 && 'pagination__list_active']]}
    >
      {count + 1}
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
            .map((count) => paginateElements(count))}
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
                onClick={() => setPage(pagesData.length)}
              >
                {pagesData.length}
              </span>
            </>
          )}
        </div>
      ) : (
        <div className={cls['pagination__list']}>
          {pagesData.map((count) => paginateElements(count))}
        </div>
      )}
      {/* <span className={cls['pagination__list_active']}>1</span>
      <span>2</span>
      <span>3</span>
      <p>...</p>
      <span>10</span> */}
    </div>
  );
};

export default Pagination;
