import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';
import cls from './contactUs.module.scss';

const ContactUs = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    window.scrollTo(window.scrollX, 0);
    navigate(`/${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`)
  }

  return (
    <div className={cls['contact-us']}>
      <div className={cls['contact-us__body']}>
        <div className={cls['contact-us__body__content']}>
          <h4>Contact Us</h4>
          <p>
            You can fill out the question form and we will post a reply to your
            questions on 1:1 general consultation page.
          </p>
        </div>
        <div className={cls['contact-us__body__button']}>
          <button
            onClick={navigateHandler}
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
