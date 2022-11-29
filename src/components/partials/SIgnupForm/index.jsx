import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../elements/UI/FormButton';
import FormInput from '../../elements/FormInput';
import { paths } from '../../../constants/paths';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './signupForm.module.scss';
import * as yup from 'yup';
import axios from 'axios';
import { axiosInstance } from '../../../constants/axios';

const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const SignupForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    const response = await axiosInstance.post('accounts/users',{
      username: e.userName,
      email: e.email,
      password: e.password
    }) 

    console.log(response);
  };

  return (
    <div className={cls['signup']}>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput
          placeholder={'User Name'}
          type={'text'}
          rules={register('userName')}
        />
        {errors.userName && <p>{errors.userName.message}</p>}
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
        <FormInput
          placeholder={'Confirm Password'}
          type={'password'}
          rules={register('confirmPassword')}
        />
        {errors.confirmPassword && <p>Input value should match password</p>}
        <Button type="submit">Sign Up</Button>
      </form>
      <span className={cls['signup__confirm']}>
        Already have an account? <b onClick={() => navigate(`/${paths.LOGIN}`)}>Log In</b>
      </span>
    </div>
  );
};

export default SignupForm;
