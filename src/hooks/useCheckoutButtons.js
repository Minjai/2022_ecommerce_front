import { useNavigate } from 'react-router-dom';

export const useCheckoutButtons = (path) => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    navigate(-1);
  };

  const nextBtnhandler = () => {
    navigate(path);
  };

  return {
    backBtnHandler,
    nextBtnhandler,
  };
};
