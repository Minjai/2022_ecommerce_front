export const nameClose = (str) => {
  return str
    ?.split('')
    .map((item, index) => {
      if (index > 3) {
        return (item = '*');
      }

      return item;
    })
    .join('');
};
