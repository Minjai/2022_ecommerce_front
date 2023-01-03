import cls from './formButton.module.scss';

const Button = ({ type, children, auth = false }) => {
  return (
    <button
      id={cls[auth ? 'auth-button' : '']}
      className={cls['form-button']}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
