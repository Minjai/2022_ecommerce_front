import ProductItem from '../../elements/ProductItem';
import Pagination from '../../elements/Pagination';
import cls from './paginatedList.module.scss';

const PaginatedList = ({ data, options, isBest = false }) => {
  return (
    <div className={cls['paginated-list']}>
      <div className={cls['paginated-list__body']}>
        {data?.map((item) => (
          <div key={item.id} className={cls['paginated-list__child']}>
            <ProductItem isBest={isBest} item={item} />
          </div>
        ))}
      </div>
      {options?.pageCount > options?.limit && (
        <div className={cls['painated-list__footer']}>
          <Pagination options={options} />
        </div>
      )}
    </div>
  );
};

export default PaginatedList;
