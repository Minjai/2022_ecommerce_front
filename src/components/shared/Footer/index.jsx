import { useGetFooterInfoQuery } from '../../../store/query/footerQuery';
import { useGetContactsQuery } from '../../../store/query/settingsQuery';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import Logo from '../../elements/UI/Logo';
import cls from './footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  const { data } = useGetFooterInfoQuery()

  const { data: contactData } = useGetContactsQuery()

  const navigateHandler = (path) => {
    window.scrollTo(window.scrollX, 0);
    navigate(path);
  };

  return (
    <footer className={cls['footer']}>
      <div className="container">
        <div className={cls['footer-upper']}>
          <div className={cls['footer-upper__logo']}>
            <Logo />
            {<p>{data?.results[0]?.description}</p>}
            <p>Email: {contactData?.results[0]?.email}</p>
          </div>
          <div className={cls['footer-upper__links']}>
            <ul>
              <h3>Policies</h3>
              <li>
                <span onClick={() => navigateHandler(`/${paths.POLICY}`)}>
                  Our Policy
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigateHandler(`/${paths.TERMS_CONDITIONS}`)}
                >
                  Terms & Contidions
                </span>
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
        {<p>{data?.results[0]?.description}</p>}
          <span>Copyright C 2022 test. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
