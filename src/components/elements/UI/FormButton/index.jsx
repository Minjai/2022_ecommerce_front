import cls from './formButton.module.scss';

const Button = ({ type, children }) => {
  return (
    <button className={cls['form-button']} type={type}>
      {children}
    </button>
  );
};

export default Button;
