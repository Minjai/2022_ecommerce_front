import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import { dateParser } from '../../../utils/dateParser';
import Pagination from '../../elements/Pagination';
import cls from './consultationList.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CiLock } from 'react-icons/ci';

const ConsultationList = ({ bottom = false, data, options }) => {
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

  return (
    <div id={cls[bottom ? 'active' : '']} className={cls['consultation']}>
      <div className={cls['consultation-create']}>
        <button onClick={() => createPostHandler(`/${paths.CUSTOMER_POST}`)}>
          Create a Post
        </button>
      </div>
      <div className={cls['consultation-list']}>
        {data?.map(
          ({ created_at, detail, product, user, children, access }, index) => (
            <div
              id={
                cls[
                  !product.images.find((item) => item.is_feature === true).image
                    ? 'active'
                    : ''
                ]
              }
              className={cls['consultation-list__child']}
              key={created_at}
            >
              <div className={cls['consultation-list__child__left']}>
                <span>{index + 1}</span>
                {product.images.find((item) => item.is_feature === true)
                  .image && (
                  <img
                    src={
                      product.images.find((item) => item.is_feature === true)
                        .image
                    }
                    alt="consutation-pic"
                  />
                )}
                <p>
                  <CiLock /> <b>{detail}</b>
                </p>
              </div>
              <div className={cls['consultation-list__child__right']}>
                <span
                  onClick={
                    access
                      ? () => navigate(`/${paths.CONSULTATION}/${product.id}`)
                      : modalHandler
                  }
                >
                  {children.length} replies
                </span>
                <p>{user.username}</p>
                <p>{dateParser(created_at)}</p>
              </div>
            </div>
          )
        )}
      </div>
      {options?.pageCount > options?.limit && <Pagination options={options} />}
    </div>
  );
};

export default ConsultationList;
