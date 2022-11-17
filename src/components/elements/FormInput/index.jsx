import cls from './formInput.module.scss'

const FormInput = ({ placeholder, type, rules, }) => {
  return (
    <input className={cls['form-input']} placeholder={placeholder} type={type} {...rules}/>
  )
}

export default FormInput