import { dateParser } from '../../../utils/dateParser';
import { pointComma } from '../../../utils/pointComma';
import Pagination from '../../elements/Pagination';
import cls from './pointsList.module.scss';

const PointsList = ({ data, options, points }) => {
  return (
    <div className={cls['user-width']}>
      <div className={cls['user-width__header']}>
        <h3>Usable Points</h3>
        <span>
          {pointComma(points)} points
        </span>
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
          {data.results.map(({ id, point, created_at, description }, index) => (
            <div key={id} className={cls['user-width__body__list__child']}>
              <span>{index + 1}</span>
              <div>
                <span>{dateParser(created_at)}</span>
                <p>{description}</p>
              </div>
              <b>+ {pointComma(point)} points</b>
            </div>
          ))}
        </div>
      </div>
      {options.pageCount > options.limit && <Pagination options={options} />}
    </div>
  );
};

export default PointsList;
