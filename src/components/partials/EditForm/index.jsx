import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cls from './editForm.module.scss';
import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
});

const EditForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handler = (state) => {};

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
            {...register('userName')}
            placeholder={window.innerWidth > 600 ? 'User name' : ''}
          />
          <p>{errors?.userName?.message}</p>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
