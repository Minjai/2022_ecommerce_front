import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import cls from './editForm.module.scss';
import * as yup from 'yup';

const schema = yup.object().shape({
  userEmail: yup.string().email().required(),
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

  const handler = (state) => {
    
  };

  return (
    <div className={cls['edit']}>
      <h3>Edit Profile</h3>
      <div className={cls['edit__body']}>
        <form onSubmit={handleSubmit(handler)}>
          <input
            type="email"
            {...register('userEmail')}
            placeholder="User email"
          />
          {errors.userEmail && <p>{errors.userEmail.message}</p>}
          <input
            type="text"
            {...register('userName')}
            placeholder="User name"
          />
          {errors.userName && <p>{errors.userName.message}</p>}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
