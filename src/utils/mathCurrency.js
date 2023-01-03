export const mathCurrency = (value, currencyValue) => {
  const number = +value * currencyValue

  return number?.toFixed(2)
}