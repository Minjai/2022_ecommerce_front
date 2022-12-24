import cls from './trackingList.module.scss';
import { useSelector } from 'react-redux';

const TrackingList = () => {
  const { trackingNumber } = useSelector(state => state.order)

  return (
    <div className={cls['tracking-list']}>
      <div className={cls['tracking-list__child']}>
        <span>Tracking number : {trackingNumber}</span>
        <button>View</button>
      </div>
    </div>
  );
};

export default TrackingList;
