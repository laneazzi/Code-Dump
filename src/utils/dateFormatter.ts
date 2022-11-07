export const dateFormatter = (date: Date) => {
  const days = date?.toLocaleDateString().split('.');
  let newDate = '';
  if (days) {
    newDate = `${days[0]}`;
  }

  return newDate;
};
