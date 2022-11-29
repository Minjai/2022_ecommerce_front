import { setContent, setModal } from '../../../store/slices/modal';
import { modalPaths, paths } from '../../../constants/paths';
import Pagination from '../../elements/Pagination';
import cls from './consultationList.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CiLock } from 'react-icons/ci';

const data = [
  {
    id: 1,
    order: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnXwJX2qgdJZ-ug1YCaG56LXPjmN_gJGBkDB8JGcK7w&s',
    question: 'lorem ipsum dolar',
    user: 'react',
    date: '01/01/2020',
    answers: [1, 2],
    access: true,
  },
  {
    id: 2,
    order: 100,
    question: 'lorem ipsum dolar',
    user: 'react',
    date: '01/01/2020',
    answers: [1, 2],
    access: false,
  },
  {
    id: 3,
    order: 2000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnXwJX2qgdJZ-ug1YCaG56LXPjmN_gJGBkDB8JGcK7w&s',
    question: 'lorem ipsum dolar',
    user: 'react',
    date: '01/01/2020',
    answers: [1, 2],
    access: false,
  },
];

const ConsultationList = ({ bottom }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(setModal(true));
    dispatch(setContent(modalPaths.CONSULTATION));
  };

  const createPostHandler = (path) => {
    window.scrollTo(window.scrollX, 0);
    navigate(path)
  }

  return (
    <div id={cls[bottom ? 'active' : '']} className={cls['consultation']}>
      <div className={cls['consultation-create']}>
        <button onClick={() => createPostHandler(`/${paths.CUSTOMER_POST}`)}>
          Create a Post
        </button>
      </div>
      <div className={cls['consultation-list']}>
        {data.map(
          ({ id, date, image, order, question, user, answers, access }) => (
            <div
              id={cls[!image ? 'active' : '']}
              className={cls['consultation-list__child']}
              key={id}
            >
              <div className={cls['consultation-list__child__left']}>
                <span>{order}</span>
                {image && <img src={image} alt="consutation-pic" />}
                <p>
                  <CiLock /> {question} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, iure!
                </p>
              </div>
              <div className={cls['consultation-list__child__right']}>
                <span
                  onClick={
                    access
                      ? () => navigate(`/${paths.CONSULTATION}/${id}`)
                      : modalHandler
                  }
                >
                  {answers.length} replies
                </span>
                <p>{user}</p>
                <p>{date}</p>
              </div>
            </div>
          )
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default ConsultationList;
