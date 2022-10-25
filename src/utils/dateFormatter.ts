export const dateFormatter = (date: Date) => {
  const days = date?.toLocaleDateString().split('.');
  let newDate = '';
  if (days) {
    newDate = `${days[1]}/${days[0]}/${days[2]}`;
  }

  return newDate;
};
