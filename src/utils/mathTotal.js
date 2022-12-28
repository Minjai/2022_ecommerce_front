export const mathSubTotal = (arr) => {
  return arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return prev + +item.pickedPackage?.selling_price;
    } else {
      return prev + +item.quantity?.selling_price;
    }
  }, 0);
};

export const mathTotal = (arr, free = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return prev + +item.pickedPackage?.selling_price;
    } else {
      return prev + +item.quantity?.selling_price;
    }
  }, 0);

  return price - free - discount / 1000;
};

export const mathModalTotal = (arr, free = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    return prev + +item.quantity?.selling_price;
  }, 0);

  return price - free - discount / 1000;
};
