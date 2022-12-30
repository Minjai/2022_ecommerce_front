import { initConsultation } from '../../../store/slices/consultation';
import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { dateParser } from '../../../utils/dateParser';
import { nameClose } from '../../../utils/nameCloser';
import Pagination from '../../elements/Pagination';
import cls from './consultationList.module.scss';
import { useNavigate } from 'react-router-dom';
import { CiLock } from 'react-icons/ci';

const ConsultationList = ({ bottom = false, data, options }) => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.CONSULTATION));
  };

  const createPostHandler = (path) => {
    window.scrollTo(window.scrollX, 0);
    navigate(path);
  };

  const initQuestionsHandler = (item) => {
    dispatch(initConsultation(item));
    navigate(`/${paths.CONSULTATION}/${item.category.id}/`);
  };

  return (
    <div id={cls[bottom ? 'active' : '']} className={cls['consultation']}>
      <div className={cls['consultation-create']}>
        <button onClick={() => createPostHandler(`/${paths.CUSTOMER_POST}`)}>
          Create a Post
        </button>
      </div>
      <div className={cls['consultation-list']}>
        {data?.map((item, index) => (
          <div
            onClick={isAuth ? () => initQuestionsHandler(item) : modalHandler}
            id={
              cls[
                !item.product.images.find((item) => item.is_feature === true)
                  ?.image
                  ? 'active'
                  : ''
              ]
            }
            className={cls['consultation-list__child']}
            key={item.created_at}
          >
            <div className={cls['consultation-list__child__left']}>
              <span>{index + 1}</span>
              {item.product.images.find((item) => item.is_feature === true)
                ?.image && (
                <img
                  src={
                    item.product.images.find((item) => item.is_feature === true)
                      ?.image
                  }
                  alt="consutation-pic"
                />
              )}
              <p>
                <CiLock /> <b>{item.detail}</b>
              </p>
            </div>
            <div className={cls['consultation-list__child__right']}>
              <span>{item.children.length} replies</span>
              <p>{nameClose(item.user.username)}</p>
              <p>{dateParser(item.created_at)}</p>
            </div>
          </div>
        ))}
      </div>
      {options?.pageCount > options?.limit && <Pagination options={options} />}
    </div>
  );
};

export default ConsultationList;
