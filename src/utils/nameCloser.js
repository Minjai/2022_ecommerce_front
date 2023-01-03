export const nameClose = (str) => {
  return str
    ?.split('')
    .slice(0,8)
    .map((item, index) => {
      if (index > 3) {
        return (item = '*');
      }

      return item;
    })
    .join('');
};
