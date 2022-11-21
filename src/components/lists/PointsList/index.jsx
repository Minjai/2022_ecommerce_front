import Pagination from '../../elements/Pagination';
import cls from './pointsList.module.scss';

const PointsList = () => {
  return (
    <div className={cls['user-width']}>
      <div className={cls['user-width__header']}>
        <h3>Usable Points</h3>
        <span>3000 points</span>
      </div>
      <div className={cls['user-width__body']}>
        <div className={cls['user-width__body__header']}>
          <div>
            <span>Date</span>
            <span>Description</span>
          </div>
          <span>Points</span>
        </div>
        <div className={cls['user-width__body__list']}>
          <div className={cls['user-width__body__list__child']}>
            <span>1</span>
            <div>
              <span>01/03/2020</span>
              <p>Test span</p>
            </div>
            <b>+ 2000 points</b>
          </div>
          <div className={cls['user-width__body__list__child']}>
            <span>1</span>
            <div>
              <span>01/03/2020</span>
              <p>Test span</p>
            </div>
            <b>+ 2000 points</b>
          </div>
          <div className={cls['user-width__body__list__child']}>
            <span>1</span>
            <div>
              <span>01/03/2020</span>
              <p>Test span</p>
            </div>
            <b>+ 2000 points</b>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default PointsList;
