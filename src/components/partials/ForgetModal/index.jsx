import { axiosInstance } from '../../../constants/axios';
import CloseButton from '../../elements/UI/CloseButton';
import { setModal } from '../../../store/slices/modal';
import { yupResolver } from '@hookform/resolvers/yup';
import cls from './forgetModal.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgetModal = () => {
  const dispatch = useDispatch();

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

  const handleFormSubmit = async (e) => {
    try {
      const response = await axiosInstance.post('accounts/profiles/reset_password_send_email/' , {
        email: e.email
      })

    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className={cls['forget-modal']}>
      <CloseButton />
      <div className={cls['forget-modal-wrapper']}>
        <h3>FORGOT PASSWORD</h3>
        <p>
          Please enter your email address below. You will receive a link to
          reset your password.
        </p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <span>Email Address</span>
          <input {...register('email')} type="email" placeholder="Email Address" />
          {errors.email && <p>{errors.email.message}</p>}
          <button>Submit</button>
        </form>
        <span>
          Already a Customer?{' '}
          <b onClick={() => dispatch(setModal(false))}>Log in</b>
        </span>
      </div>
    </div>
  );
};

export default ForgetModal;
