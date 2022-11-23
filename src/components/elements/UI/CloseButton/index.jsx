import { setModal } from '../../../../store/slices/modal';
import { IoCloseOutline } from 'react-icons/io5';
import cls from './closeButton.module.scss';
import { useDispatch } from 'react-redux';

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => dispatch(setModal(false))} 
      className={cls['close-btn']}
    >
      <IoCloseOutline />
    </span>
  );
};

export default CloseButton;
