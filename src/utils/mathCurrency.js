export const mathCurrency = (value, currencyValue) => {
  const number = +value * currencyValue;

  return number?.toFixed(2);
};

export const mathShipping = (data, currencyValue) => {
  if (data.length) {
    return data
      ?.reduce((prev, item) => {
        if (item.pickedMethod) {
          return (
            prev + +mathCurrency(+item?.pickedMethod?.price, currencyValue)
          );
        } else {
          return prev + +mathCurrency(item?.price, currencyValue);
        }
      }, 0)
      ?.toFixed(2);
  } else {
    return +mathCurrency(data, currencyValue);
  }
};
