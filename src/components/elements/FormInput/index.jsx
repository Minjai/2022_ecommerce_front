const FormInput = ({ placeholder, type, rules, }) => {
  return (
    <input placeholder={placeholder} type={type} {...rules}/>
  )
}

export default FormInput