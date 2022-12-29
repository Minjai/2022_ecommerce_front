export const mathSubTotal = (arr) => {
  return arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return prev + +item.pickedPackage?.selling_price;
    } else {
      return prev + +item.quantity?.selling_price;
    }
  }, 0);
};

export const mathTotal = (arr, fee = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return prev + +item.pickedPackage?.selling_price;
    } else {
      return prev + +item.quantity?.selling_price;
    }
  }, 0);

  return price + fee - discount / 1000;
};

export const mathModalTotal = (arr, fee = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    return prev + +item.quantity?.selling_price;
  }, 0);

  return price + fee - discount / 1000;
};
