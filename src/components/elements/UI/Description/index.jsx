import cls from './description.module.scss';

const Description = ({ children, cartTitle = false }) => {
  return (
    <h4 id={cls[cartTitle ? 'active' : '']} className={cls['description']}>
      {children}
    </h4>
  );
};

export default Description;
