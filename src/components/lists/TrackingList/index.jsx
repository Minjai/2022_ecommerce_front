import cls from './trackingList.module.scss';

const TrackingList = () => {
  return (
    <div className={cls['tracking-list']}>
      <div className={cls['tracking-list__child']}>
        <span>Tracking number : 123456</span>
        <button>View</button>
      </div>
      <div className={cls['tracking-list__child']}>
        <span>Tracking number : 123456</span>
        <button>View</button>
      </div>
    </div>
  );
};

export default TrackingList;
