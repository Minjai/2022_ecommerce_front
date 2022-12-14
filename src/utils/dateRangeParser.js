export const dateRangeParser = (date = {}) => {
  const parser = (item) => {
    const newDate = new Date(item);

    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  let startDate = ''
  let endDate = ''

  if(date){
    startDate = parser(date ? date[0] : '');
    endDate = parser(date ? date[1] : '');
  }

  return {
    startDate,
    endDate,
  };
};
