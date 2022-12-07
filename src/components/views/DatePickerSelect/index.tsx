import { FC, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';

import { DateIcon } from 'assets/icons';
import { dateFormatter } from 'utils/dateFormatter';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './DatePickerSelect.module.scss';

type TDatePickerSelectProps = {
  title: string;
  size?: 'large';
  getDate?: (date: string) => void;
};

const DatePickerSelect: FC<TDatePickerSelectProps> = ({ title, size, getDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const setDate = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = moment(selectedDate).format('MMMM D, YYYY');
    getDate?.(formattedDate);
  };

  const date = dateFormatter(selectedDate as Date);

  const datePickerClasses = classNames(styles.container, { [styles.container__large]: size });

  const customInput = <DateIcon className={styles.container__content_main_icon} />;

  return (
    <div className={datePickerClasses}>
      <div className={styles.container__content}>
        <div className={styles.container__content_title}>
          <p className={styles.container__content_title}>{title}</p>
        </div>
        <div className={styles.container__content_main}>
          <p className={styles.container__content_main_description}>{date ? date : 'MM/DD/YYYY'}</p>
          <DatePicker
            selected={selectedDate}
            customInput={customInput}
            wrapperClassName={styles.datepicker}
            onChange={(date: Date) => setDate(date)}
            popperClassName={styles.datepicker__header}
            calendarClassName={styles.datepicker__calendar}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerSelect;
