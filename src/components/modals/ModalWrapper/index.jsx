import MobileSearch from '../../partials/MobileSearch/index.jsx';
import AlarmContent from '../../partials/AlarmContent/index.jsx';
import CustomContent from '../content/CustomContent/index.jsx';
import PaymentInfo from '../../partials/PaymentInfo/index.jsx';
import ForgetModal from '../../partials/ForgetModal/index.jsx';
import TrackingList from '../../lists/TrackingList/index.jsx';
import ReviewInfo from '../../partials/ReviewInfo/index.jsx';
import { modalPaths } from '../../../constants/paths.js';
import { useSelector } from 'react-redux';
import cls from './modal.module.scss';
import { useEffect } from 'react';

const ModalWrapper = () => {
  const { isActive, content } = useSelector((state) => state.modal);

  useEffect(() => {
    if (window.innerWidth > 700) {
      window.scrollTo(window.scrollX, 18);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  }, [isActive]);

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
        <MobileSearch />
      ) : content === modalPaths.ALARM ? (
        <AlarmContent />
      ) : content === modalPaths.PAYMENT ? (
        <PaymentInfo />
      ) : content === modalPaths.FORGET_PASSWORD ? (
        <ForgetModal />
      ) : (
        <ReviewInfo />
      )}
    </div>
  );
};

export default ModalWrapper;
