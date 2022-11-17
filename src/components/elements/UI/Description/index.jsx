import cls from './description.module.scss'

const Description = ({ children }) => {
  return <h4 className={cls['description']}>{children}</h4>;
};

export default Description;
