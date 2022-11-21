import { yupResolver } from '@hookform/resolvers/yup';
import cls from './changeForm.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  oldPassword: yup.string().min(5).max(15).required(),
  newPassword: yup.string().min(5).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null]).required(),
});

const ChangeForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handler = (state) => {};

  return (
    <div className={cls['change']}>
      <h3>Change Password</h3>
      <div className={cls['change__body']}>
        <form onSubmit={handleSubmit(handler)}>
          <input
            type="password"
            {...register('oldPassword')}
            placeholder="Old Password"
          />
          {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
          <input
            type="password"
            {...register('newPassword')}
            placeholder="New Password"
          />
          {errors.newPassword && <p>{errors.newPassword.message}</p>}
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeForm;
