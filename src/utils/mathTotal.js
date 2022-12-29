export const mathSubTotal = (activeCurrency, arr) => {
  return arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      const finalPrice = item.prices?.find(
        (elem) =>
          elem?.currency?.currency === activeCurrency?.currency &&
          elem?.package === item.pickedPackage?.package
      );

      return prev + +finalPrice?.selling_price;
    } else {
      const finalPrice = item?.product.prices?.find(
        (elem) =>
          elem?.currency?.currency === activeCurrency?.currency &&
          elem?.package === item.quantity?.package
      );

      return prev + +finalPrice?.selling_price;
    }
  }, 0);
};

export const mathTotal = (activeCurrency, arr, fee = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      const finalPrice = item.prices?.find(
        (elem) =>
          elem?.currency?.currency === activeCurrency?.currency &&
          elem?.package === item.pickedPackage?.package
      );


      return prev + +finalPrice?.selling_price;
    } else {
      return prev + +item.quantity?.selling_price;
    }
  }, 0);

  return price + fee - discount / 1000;
};

export const mathModalTotal = (activeCurrency, arr, fee = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    const finalPrice = item?.product?.prices?.find(
      (elem) =>
        elem?.currency?.currency === activeCurrency?.currency &&
        elem?.package === item.quantity?.package
    );

    return prev + +finalPrice?.selling_price;
  }, 0);

  return price + fee - discount / 1000;
};
