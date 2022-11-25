import CloseButton from '../../../elements/UI/CloseButton';
import { setModal } from '../../../../store/slices/modal';
import { useDispatch } from 'react-redux';
import cls from './custom.module.scss';

const CustomContent = ({ title, description, children }) => {
  const dispatch = useDispatch();

  return (
    <div className={cls['custom']}>
      <CloseButton />
      <div className={cls['custom-title']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
      <div className={cls['custom-button']}>
        <button onClick={() => dispatch(setModal(false))}>Close</button>
      </div>
    </div>
  );
};

export default CustomContent;
