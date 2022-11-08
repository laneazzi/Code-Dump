export const dateFormatter = (date: Date) => {
  const newDate = date?.toLocaleDateString('en-029');

  return newDate;
};
