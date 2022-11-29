import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../elements/FormInput';
import Button from '../../elements/UI/FormButton';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './loginForm.module.scss';
import * as yup from 'yup';
import axios from 'axios';
import { axiosInstance } from '../../../constants/axios';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    const response = await axiosInstance.post('token',{
      username: e.email,
      password: e.password,
    }) 

    console.log(response);
  };

  return (
    <div className={cls['login']}>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput
          placeholder={'Email'}
          type={'email'}
          rules={register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <FormInput
          placeholder={'Password'}
          type={'password'}
          rules={register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <span>Forgot password?</span>
        <Button type="submit">Log In</Button>
      </form>
      <span className={cls['login__confirm']}>
        Don't have an account?{' '}
        <b onClick={() => navigate(`/${paths.SIGNUP}`)}>Sign Up</b>
      </span>
    </div>
  );
};

export default LoginForm;
