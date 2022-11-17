import { HiOutlineArrowRight } from 'react-icons/hi';
import cls from './packageList.module.scss';

const PackageList = ({ list }) => {
  return (
    <div className={cls['package']}>
      <div className={cls['package__header']}>
        <span>Package</span>
        <span>Price</span>
      </div>
      <div className={cls['package__body']}>
        {list.map(({ id, value, previousPrice, currentPrice, isPicked }) => (
          <div key={id} className={cls['package__body__child']}>
            <div>
              <span className={cls[isPicked ? 'active' : '']}></span>
              <p>{value}</p>
            </div>
            <div>
              <p>{`$ ${previousPrice}`}</p>
              <HiOutlineArrowRight />
              <b>{`$ ${currentPrice}`}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
