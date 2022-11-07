import { Link, useMatch } from "react-router-dom"
import cls from './routerLink.module.scss'

const RouterLink = ({ to, children }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1
  })

  return (
    <Link to={to} className={cls[match ? 'activeLink': '']}>
      {children}
    </Link>
  )
}

export default RouterLink