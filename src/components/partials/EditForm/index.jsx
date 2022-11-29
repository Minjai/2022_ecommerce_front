import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cls from './editForm.module.scss';
import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup.string().required(),
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
            className={cls['noClick']}
            type="text"
            placeholder={window.innerWidth > 600 ? 'User email' : ''}
          />
          {window.innerWidth < 600 && <span>User name</span>}
          <input
            type="text"
            {...register('userName')}
            placeholder={window.innerWidth > 600 ? 'User name' : ''}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
