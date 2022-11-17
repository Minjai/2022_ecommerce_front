import cls from './pagination.module.scss';

const Pagination = ({ pages }) => {
  return (
    <div className={cls['pagination']}>
      <div className={cls['pagination__list']}>
        <span className={cls['pagination__list_active']}>1</span>
        <span>2</span>
        <span>3</span>
        <p>...</p>
        <span>10</span>
      </div>
    </div>
  );
};

export default Pagination;
