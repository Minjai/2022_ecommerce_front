import PageTitle from '../../elements/UI/PageTitle';
import cls from './consultationInfo.module.scss';
import { useNavigate } from 'react-router-dom';
import { BiEnvelope } from 'react-icons/bi';

const ConsultationInfo = () => {
  const navigate = useNavigate();

  return (
    <div className={cls['consultation']}>
      <PageTitle>1 : 1 General Consultation</PageTitle>
      <div className={cls['consultation__child']}>
        <div className={cls['consultation__child__title']}>
          <p>I have a question</p>
          <span>
            By username <b>01/01/2022</b>
          </span>
        </div>
        <div className={cls['consultation__child__body']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos dicta consequuntur perspiciatis ipsa, a, eos autem incidunt
            nulla voluptates itaque, alias consequatur cum! Voluptatum incidunt
            vero ea repellendus id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos dicta consequuntur perspiciatis ipsa, a, eos autem incidunt
            nulla voluptates itaque, alias consequatur cum! Voluptatum incidunt
            vero ea repellendus id.
          </p>
          <span>
            <BiEnvelope />1 reply for this question
          </span>
        </div>
      </div>
      <div id={cls['active']} className={cls['consultation__child']}>
        <div className={cls['consultation__child__title']}>
          <p>Re: I have a question</p>
          <span>
            By manager <b>01/01/2022</b>
          </span>
        </div>
        <div className={cls['consultation__child__body']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos dicta consequuntur perspiciatis ipsa, a, eos autem incidunt
            nulla voluptates itaque, alias consequatur cum! Voluptatum incidunt
            vero ea repellendus id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quos dicta consequuntur perspiciatis ipsa, a, eos autem incidunt
            nulla voluptates itaque, alias consequatur cum! Voluptatum incidunt
            vero ea repellendus id.
          </p>
        </div>
      </div>
      <div className={cls['consultation-comment']}>
        <div>
          <p>Comment:</p>
          <textarea
            placeholder="Enter details of your question"
            cols="30"
            rows="10"
          ></textarea>
          <span>Submit Comment</span>
        </div>
      </div>
      <div className={cls['consultation__footer']}>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default ConsultationInfo;
