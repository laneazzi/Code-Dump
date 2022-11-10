export const Months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const range = (end: number) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 },
  );
  return result;
};

export const getMonthYear = (date: Date) => {
  const d = date.toDateString();

  return `${d[1]}`;
};

export const nextMonth = (date: Date, cb: any) => {
  const mon = date.getMonth();
  if (mon < 11) {
    date.setMonth(mon + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

export const prevMonth = (date: Date, cb: any) => {
  const mon = date.getMonth();
  if (mon > 0) {
    date.setMonth(mon - 1);
  } else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};

export const dateFormatting = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

export const datesAreOnSameDay = (first: Date, second: Date) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();
