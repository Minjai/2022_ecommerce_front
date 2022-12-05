export const mathSubTotal = (arr) => {
  return arr?.reduce((prev, item) => {
      return prev + +item.prices[0].selling_price;
  }, 0);
};

export const mathTotal = (arr, free = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
      return prev + +item.prices[0].selling_price;
  }, 0);

  return price - free - discount
};