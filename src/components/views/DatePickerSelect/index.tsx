import { FC, useState } from 'react';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';

import { DateIcon } from 'assets/icons';
import { dateFormatter } from 'utils/dateFormatter';

import styles from './DatePickerSelect.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

type TDatePickerSelectProps = {
  title: string;
  size?: 'large';
};

const DatePickerSelect: FC<TDatePickerSelectProps> = ({ title, size }) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

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
            popperClassName={styles.datepicker__header}
            calendarClassName={styles.datepicker__calendar}
            onChange={(date: Date) => setSelectedDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerSelect;
