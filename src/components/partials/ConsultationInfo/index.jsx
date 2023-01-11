import { setAlert, setAlertContent } from '../../../store/slices/alert';
import { initConsultation } from '../../../store/slices/consultation';
import { axiosInstance } from '../../../constants/axios';
import { dateParser } from '../../../utils/dateParser';
import { useDispatch, useSelector } from 'react-redux';
import { nameClose } from '../../../utils/nameCloser';
import PageTitle from '../../elements/UI/PageTitle';
import { paths } from '../../../constants/paths';
import cls from './consultationInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';
import { useState } from 'react';

const ConsultationInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const { data } = useSelector((state) => state.consultation);
  const { userInfo } = useSelector((state) => state.user);

  const submitHandler = async () => {
    try {
      if (
        data.user.username === userInfo.username &&
        data.user.email === userInfo.email
      ) {
        const response = await axiosInstance.patch(
          `consultations/consultations/${data.id}/`,
          {
            detail: comment,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
      } else {
        const response = await axiosInstance.post(
          'consultations/consultations/',
          {
            username: userInfo.username,
            category: data.category.id,
            product: data.product.id,
            detail: comment,
            parent: data.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
      }
      
      setComment('');
      dispatch(setAlert(true));
      dispatch(setAlertContent('Your comment has been added !'));
      navigate(`/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`)
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={cls['consultation']}>
      <PageTitle>1 : 1 General Consultation</PageTitle>
      <div className={cls['consultation__child']}>
        <div className={cls['consultation__child__title']}>
          <p>I have a question</p>
          <span>
            By {nameClose(data.username)} <b>{dateParser(data?.created_at)}</b>
          </span>
        </div>
        <div className={cls['consultation__child__images']}>
          {data?.consultation_files?.length > 0
            ? data?.consultation_files.map((item) => (
                <img
                  key={item.id}
                  src={item.attachments}
                  alt="consultation-pic"
                />
              ))
            : null}
        </div>
        <div className={cls['consultation__child__body']}>
          <p>{data?.detail}</p>
        </div>
      </div>
      {data?.children?.length > 0
        ? data?.children?.map((item) => (
            <div
              onClick={() => dispatch(initConsultation(item))}
              key={item.id}
              id={cls['active']}
              className={cls['consultation__child']}
            >
              <div className={cls['consultation__child__title']}>
                <p>Re: I have a question</p>
                <span>
                  By {item.username} <b>{dateParser(item.created_at)}</b>
                </span>
              </div>
              <div className={cls['consultation__child__body']}>
                <p>{item.detail}</p>
                <span>
                  <BiEnvelope />
                  {item.children.length} reply for this question
                </span>
              </div>
            </div>
          ))
        : null}
      <div className={cls['consultation-comment']}>
        <div>
          <p>Comment:</p>
          <textarea
            placeholder="Enter details of your question"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <span onClick={submitHandler}>Submit Comment</span>
        </div>
      </div>
      <div className={cls['consultation__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default ConsultationInfo;
