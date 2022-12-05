import cls from './emptyText.module.scss'

const EmptyText = ({ text }) => {
  return (
    <div className={cls['empty']}>
      <h3>There are no {text} items</h3>
    </div>
  )
}

export default EmptyText