import { mathCurrency } from './mathCurrency';

export const mathSubTotal = (activeCurrency, arr) => {
  return arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return (
        prev +
        +mathCurrency(
          +item?.pickedPackage?.selling_price,
          activeCurrency?.currency_price
        )
      );
    } else {
      return (
        prev +
        +mathCurrency(
          +item?.quantity?.selling_price,
          activeCurrency?.currency_price
        )
      );
    }
  }, 0);
};

export const mathTotal = (activeCurrency, arr, fee, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    if (item.pickedPackage) {
      return (
        prev +
        +mathCurrency(
          +item?.pickedPackage?.selling_price,
          activeCurrency?.currency_price
        )
      );
    } else {
      return (
        prev +
        +mathCurrency(
          +item?.quantity?.selling_price,
          activeCurrency?.currency_price
        )
      );
    }
  }, 0);

  return price + fee - mathCurrency(discount / 1000, activeCurrency?.currency_price);
};

export const mathModalTotal = (activeCurrency, arr, fee = 0, discount = 0) => {
  const price = arr?.reduce((prev, item) => {
    return (
      prev +
      +mathCurrency(
        +item?.quantity?.selling_price,
        activeCurrency?.currency_price
      )
    );
  }, 0);

  return price + fee - mathCurrency(discount / 1000, activeCurrency?.currency_price);
};
