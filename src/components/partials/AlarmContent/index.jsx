import { useGetUserNotificationsQuery } from '../../../store/query/notificationQuery';
import { dateParser } from '../../../utils/dateParser';
import CloseButton from '../../elements/UI/CloseButton';
import EmptyText from '../../elements/UI/EmptyText';
import Loader from '../../elements/UI/Loader';
import { useSelector } from 'react-redux';
import cls from './alarm.module.scss';

const AlarmContent = () => {
  const { userInfo } = useSelector((state) => state.user);

  const { data, isLoading } = useGetUserNotificationsQuery({
    userId: userInfo.id,
  });

  return (
    <div className={cls['alarm']}>
      <CloseButton />
      <div className={cls['alarm-wrapper']}>
        <div className={cls['alarm-wrapper__header']}>
          <h3>Alarm</h3>
          <span>{data?.results ? data?.results.length : 0} New</span>
        </div>
        <div id={cls[data?.results.length > 5 ? 'active' : '']} className={cls['alarm-wrapper__body']}>
          {isLoading ? (
            <Loader />
          ) : data?.results.length > 0 ? (
            data.results.map(({ id, create_at, extra_info }) => (
              <div key={id} className={cls['alarm-wrapper__body__child']}>
                <p>{extra_info}</p>
                <span>{dateParser(create_at)}</span>
              </div>
            ))
          ) : (
            <EmptyText text={'alarm'} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AlarmContent;
