export const birthDateParser = (date) => {
  if (date.length === 8) {
    const num = date.split('');
    return `${num[0]}${num[1]}${num[2]}${num[3]}-${num[4]}${num[5]}-${num[6]}${num[7]}`;
  }
  if (date.includes('-') && date.length === 10) {
    return date;
  }
  if (date.includes('.') && date.length === 10) {
    const num = date.split('');
    return `${num[0]}${num[1]}${num[2]}${num[3]}-${num[5]}${num[6]}-${num[8]}${num[9]}`;
  }
};
