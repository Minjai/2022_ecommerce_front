import PrivateRouter from './components/PrivateRouter';
import { setAuth } from './store/slices/user/user';
import { axiosInstance } from './constants/axios';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import 'swiper/css';

const App = () => {
  const dispatch = useDispatch();

  const authRefresh = useCallback(() => async () => {
    try {
      const response = await axiosInstance.post('token/refresh/', {
        refresh: localStorage.getItem('refreshToken'),
      });

      const { access } = response.data;

      localStorage.setItem('accessToken', access);
      dispatch(setAuth(true));
    } catch (error) {
      dispatch(setAuth(false));
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      authRefresh();
    }
  }, [authRefresh]);

  return <PrivateRouter />;
};

export default App;
