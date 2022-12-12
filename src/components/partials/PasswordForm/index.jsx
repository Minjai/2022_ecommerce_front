import { yupResolver } from '@hookform/resolvers/yup';
import cls from './changeForm.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { axiosInstance } from '../../../constants/axios';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  oldPassword: yup.string().min(5).max(15).required(),
  newPassword: yup.string().min(5).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null])
    .required(),
});

const ChangeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });

  const { userInfo } = useSelector((state) => state.user);

  const handler = async (state) => {
    console.log(state);

    try {
      const response = await axiosInstance.post(`accounts/profiles/${userInfo.id}/change_password/`, {
        old_password: state.oldPassword,
        new_password: state.newPassword
      })

      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={cls['change']}>
      <h3>{window.innerWidth > 850 ? 'Change Password' : 'Edit My Profile'}</h3>
      <div className={cls['change__body']}>
        <form onSubmit={handleSubmit(handler)}>
          {window.innerWidth < 600 && <span>Old Password</span>}
          <input
            type="password"
            {...register('oldPassword')}
            placeholder={window.innerWidth > 600 ? 'Old Password' : ''}
          />
          <p>{errors?.oldPassword?.message}</p>
          {window.innerWidth < 600 && <span>New Password</span>}
          <input
            type="password"
            {...register('newPassword')}
            placeholder={window.innerWidth > 600 ? 'New Password' : ''}
          />
          <p>{errors?.newPassword?.message}</p>
          {window.innerWidth < 600 && <span>Confirm Password</span>}
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder={window.innerWidth > 600 ? 'Confirm Password' : ''}
          />
          <p>{errors?.confirmPassword?.message}</p>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeForm;
