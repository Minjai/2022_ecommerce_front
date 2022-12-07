import { setAlert } from '../../../store/slices/alert';
import { useDispatch, useSelector } from 'react-redux';
import cls from './alert.module.scss';
import { useEffect } from 'react';

const Alert = () => {
  const { isAlert, content } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAlert) {
      setTimeout(() => {
        dispatch(setAlert(false));
      }, 3000);
    }
  }, [isAlert]);

  return (
    <div id={cls[isAlert ? 'active' : '']} className={cls['alert']}>
      <h4>{content}</h4>
    </div>
  );
};

export default Alert;
