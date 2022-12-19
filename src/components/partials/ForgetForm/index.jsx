import { setAuth } from '../../../store/slices/user/user';
import { axiosInstance } from '../../../constants/axios';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../elements/FormInput';
import Button from '../../elements/UI/FormButton';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './forget.module.scss';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

const schema = yup.object().shape({
  newPassword: yup.string().min(8).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null]),
});

const ForgetForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleFormSubmit = async (e) => {
  //   try {
  //     const response = await axiosInstance.post('token/', {
  //       email: e.email,
  //       password: e.password,
  //     });

  //     const { refresh, access } = response.data;

  //     localStorage.setItem('refreshToken', refresh);
  //     localStorage.setItem('accessToken', access);

  //     dispatch(setAuth(true));
  //     navigate(paths.HOME);
  //     reset()
  //   } catch (error) {
  //     if (error.response.data.detail) {
  //       setError('email', {
  //         type: 'validate',
  //         message: error.response.data.detail,
  //       });
  //     }
  //   }
  // };

  return (
    <div className={cls['forget']}>
      <h3>Set a New Password</h3>
      <form onSubmit={handleSubmit()}>
        <FormInput
          placeholder={'New Password'}
          type={'password'}
          rules={register('newPassword')}
        />
        {errors.newPassword && <p>{errors.newPassword.message}</p>}
        <FormInput
          placeholder={'Confirm Password'}
          type={'password'}
          rules={register('confirmPassword')}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default ForgetForm;
