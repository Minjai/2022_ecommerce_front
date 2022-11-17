import { HiArrowRight } from 'react-icons/hi';
import cls from './contactUs.module.scss';

const ContactUs = () => {
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
          <button>
            <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
