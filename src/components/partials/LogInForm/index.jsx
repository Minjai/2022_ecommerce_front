import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../../elements/FormInput';
import Button from '../../elements/UI/Button';
import { useForm } from 'react-hook-form';
import cls from './loginForm.module.scss';
import * as yup from 'yup';

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
  });

  const handleFormSubmit = (e) => {};

  return (
    <div className={cls['login']}>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInput
          placeholder={'Email'}
          type={'email'}
          rules={register('email')}
        />
        <FormInput
          placeholder={'Password'}
          type={'password'}
          rules={register('password')}
        />
        <span>Forgot password?</span>
        <Button type="submit">Log In</Button>
      </form>
      <span>
        Don't have an account? <a href="link">Sign Up</a>
      </span>
    </div>
  );
};

export default LoginForm;
