import cls from './pageTitle.module.scss'

const PageTitle = ({ children }) => {
  return (
    <h3 className={cls['page-title']}>{children}</h3>
  )
}

export default PageTitle