import PrivateRouter from './components/PrivateRouter';
import { setAuth } from './store/slices/user/user';
import { axiosInstance } from './constants/axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'swiper/css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authRefresh = async () => {
      if (localStorage.getItem('refreshToken')) {
        try {
          const response = await axiosInstance.post('token/refresh/', {
            refresh: localStorage.getItem('refreshToken'),
          });
          const { access } = response.data;
          try {
            const res = await axiosInstance.post('token/verify/', {
              token: access,
            });
            localStorage.setItem('accessToken', access);
            dispatch(setAuth(true));
          } catch (error) {
            dispatch(setAuth(false));
          }
        } catch (error) {
          dispatch(setAuth(false));
        }
      }
    };

    authRefresh();
  }, [dispatch]);

  return <PrivateRouter />;
};

export default App;
