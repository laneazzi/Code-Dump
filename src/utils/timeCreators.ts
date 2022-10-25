export const hourCreator = (type: string) => {
  let hours;
  if (type === 'AM') {
    hours = Array.from(Array(24).keys());
  } else if (type === 'PM') {
    hours = Array.from(Array(12).keys());
  }
  return hours;
};

export const minutesCreator = () => {
  const minutes = Array.from(Array(60).keys());

  return minutes;
};
