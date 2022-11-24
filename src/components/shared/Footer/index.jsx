import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';
import Logo from '../../elements/UI/Logo';
import cls from './footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    window.scrollTo(window.scrollX, 150);
    navigate(path);
  };

  return (
    <footer className={cls['footer']}>
      <div className="container">
        <div className={cls['footer-upper']}>
          <div className={cls['footer-upper__logo']}>
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolor nemo ipsam eligendi praesentium? Reprehenderit?
            </p>
            <p>Email: email@gmail.com</p>
          </div>
          <div className={cls['footer-upper__links']}>
            <ul>
              <h3>Policies</h3>
              <li>
                <span>Our Policy</span>
              </li>
              <li>
                <span>Terms & Contidions</span>
              </li>
            </ul>
            <ul>
              <h3>Customer Help</h3>
              <li>
                <span
                  onClick={() =>
                    navigateHandler(`${paths.CUSTOMER_HELP}/${paths.NEWS}`)
                  }
                >
                  News
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    navigateHandler(`${paths.CUSTOMER_HELP}/${paths.FAQ}`)
                  }
                >
                  FAQ
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    navigateHandler(
                      `${paths.CUSTOMER_HELP}/${paths.CONSULTATION}`
                    )
                  }
                >
                  1 : 1 General Consultations
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls['footer-lower']}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            vero a nisi, laboriosam omnis dignissimos officia, exercitationem
            assumenda sequi corporis veniam doloremque praesentium porro vitae
            nulla asperiores autem, nam impedit.
          </p>
          <span>Copyright C 2022 test. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
