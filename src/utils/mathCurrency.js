export const mathCurrency = (value, currencyValue) => {
  const number = +value * currencyValue

  return number?.toFixed(2)
}

export const mathShipping = (data, currencyValue) => {
  return data?.reduce((prev, item) => prev + +mathCurrency(
    item?.price,
    currencyValue
  ), 0)?.toFixed(2)
}