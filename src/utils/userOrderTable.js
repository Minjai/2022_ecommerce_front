export const orderTable = (data) => {
  const orderObject = {
    awaiting_payment: 0,
    confirming_payment: 0,
    preparing_for_delivery: 0,
    shipped: 0,
    delivered: 0,
  };

  data?.results.forEach((item) => {
    let count = 0;
    orderObject[item.status] += count + 1;
  });

  return orderObject
};