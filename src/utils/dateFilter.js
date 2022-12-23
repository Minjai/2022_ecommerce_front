export const dateFilter = (range) => {
  const parser = (rng) => {
    const newDate = new Date(rng);

    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();

    return `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  function subtractDays(numOfDays, date = new Date()) {
    date.setDate(
      numOfDays === 1 ? date.getDate() + numOfDays : date.getDate() - numOfDays
    );

    return parser(date);
  }

  if (range === 3) {
    return {
      start_date: subtractDays(90),
      end_date: subtractDays(1),
    };
  } else if (range === 6) {
    return {
      start_date: subtractDays(180),
      end_date: subtractDays(1),
    };
  } else if (range === 12) {
    return {
      start_date: subtractDays(365),
      end_date: subtractDays(1),
    };
  } else {
    return '';
  }
};
