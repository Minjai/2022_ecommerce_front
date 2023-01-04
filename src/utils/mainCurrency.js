export const mainCurrency = (data) => {
  return data?.find(item => item?.main_currency === true)
}