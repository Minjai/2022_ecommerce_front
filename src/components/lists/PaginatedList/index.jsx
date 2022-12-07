import ProductItem from '../../elements/ProductItem';
import Pagination from '../../elements/Pagination';
import cls from './paginatedList.module.scss';

const PaginatedList = ({ data, count, limit }) => {
  return (
    <div className={cls['paginated-list']}>
      <div className={cls['paginated-list__body']}>
        {data?.map((item) => (
          <div key={item.id} className={cls['paginated-list__child']}>
            <ProductItem item={item} />
          </div>
        ))}
      </div>
      {count > limit && (
        <div className={cls['painated-list__footer']}>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default PaginatedList;
