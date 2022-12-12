import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cls from './editForm.module.scss';
import * as yup from 'yup';
import { axiosInstance } from '../../../constants/axios';
import { setUserInfo } from '../../../store/slices/user/user';
import { setAlert, setAlertContent } from '../../../store/slices/alert';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
});

const EditForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const handler = async (state) => {
    try {
      const response = await axiosInstance.patch(
        `/accounts/profiles/${userInfo.id}/`,
        state
      );

      dispatch(setAlert(true))
      dispatch(setAlertContent('Your profile has been edited !'))
      dispatch(setUserInfo(response.data))
      reset()
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={cls['edit']}>
      <h3>{window.innerWidth > 850 ? 'Edit Profile' : 'Edit My Profile'}</h3>
      <div className={cls['edit__body']}>
        <form onSubmit={handleSubmit(handler)}>
          {window.innerWidth < 600 && <span>Email</span>}
          <input
            type="email"
            {...register('email')}
            placeholder={window.innerWidth > 600 ? 'User email' : ''}
          />
          <p>{errors?.email?.message}</p>
          {window.innerWidth < 600 && <span>User name</span>}
          <input
            type="text"
            {...register('username')}
            placeholder={window.innerWidth > 600 ? 'User name' : ''}
          />
          <p>{errors?.username?.message}</p>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
