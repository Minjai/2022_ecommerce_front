import CloseButton from '../../elements/UI/CloseButton';
import cls from './alarm.module.scss';

const AlarmContent = () => {
  return (
    <div className={cls['alarm']}>
      <CloseButton/>
      <div className={cls['alarm-wrapper']}>
        <div className={cls['alarm-wrapper__header']}>
          <h3>Alarm</h3>
          <span>5 New</span>
        </div>
        <div className={cls['alarm-wrapper__body']}>
          <div className={cls['alarm-wrapper__body__child']}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum officiis corporis maxime quo dolore, placeat nisi dolores amet assumenda labore velit. A asperiores dignissimos in quasi sapiente magnam consequatur?</p>
            <span>Today</span>
          </div>
          <div className={cls['alarm-wrapper__body__child']}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>Yesterday</span>
          </div>
          <div className={cls['alarm-wrapper__body__child']}>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>16 Sep</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlarmContent;
