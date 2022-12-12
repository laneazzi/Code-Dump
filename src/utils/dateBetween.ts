export const dateBetween = (date: Date) => {
  const endDate = new Date() as any;
  const startDate = new Date(date) as any;

  const time = Math.abs(endDate - startDate);

  const seconds = Math.ceil(time / 1000);
  const minutes = Math.ceil(time / (1000 * 60));
  const hours = Math.ceil(time / (1000 * 60 * 60));
  const days = Math.round(time / (1000 * 60 * 60 * 24));
  const weeks = Math.round(time / (1000 * 60 * 60 * 24 * 7));

  if (seconds > 59) {
    if (minutes >= 60) {
      if (hours >= 24) {
        if (days >= 7) {
          return `${weeks} weeks ago`;
        } else {
          return `${days} days ago`;
        }
      } else {
        return `${hours} hours ago`;
      }
    } else {
      return `${minutes} minutes ago`;
    }
  } else {
    return `${seconds} seconds ago`;
  }
};
