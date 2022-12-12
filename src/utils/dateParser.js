export const dateParser = (date) => {
  const newDate = new Date(date);

  const month = newDate.getMonth();
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${day < 10 ? `0${day}` : day}/${
    month + 1 < 10 ? `0${month + 1}` : month + 1
  }/${year}`;
};