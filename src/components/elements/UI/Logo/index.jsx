import cls from './logo.module.scss';

const Logo = () => {
  return (
    <div className={cls['logo']}>
      <img src="/img/logo.png" alt="logo-pic" />
    </div>
  );
};

export default Logo;
