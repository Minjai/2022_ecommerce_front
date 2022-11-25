import CustomContent from '../content/CustomContent/index.jsx';
import TrackingList from '../../lists/TrackingList/index.jsx';
import { modalPaths } from '../../../constants/paths.js';
import { useSelector } from 'react-redux';
import cls from './modal.module.scss';
import MobileSearch from '../../partials/MobileSearch/index.jsx';
import AlarmContent from '../../partials/AlarmContent/index.jsx';

const ModalWrapper = () => {
  const { isActive, content } = useSelector((state) => state.modal);

  return (
    <div id={cls[isActive ? 'active' : '']} className={cls['modal']}>
      {content === modalPaths.CONSULTATION ? (
        <CustomContent
          title={'1 : 1 General Consultation'}
          description={'1 : 1 문의글 입니다. 읽을 수 있는 권한이 없습니다.'}
        />
      ) : content === modalPaths.REVIEW ? (
        <CustomContent
          title={'Thank you for your review!'}
          description={
            'Your review has been successfully posted. You can view your reviews on my page or review page.'
          }
        />
      ) : content === modalPaths.ORDER ? (
        <CustomContent
          title={'We have shipped your order!'}
          description={'Here are your tracking informations'}
        >
          <TrackingList />
        </CustomContent>
      ) : content === modalPaths.SEARCH ? (
        <MobileSearch/>
      ) : <AlarmContent/>}
    </div>
  );
};

export default ModalWrapper;
