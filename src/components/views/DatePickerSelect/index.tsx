import { DateIcon } from 'assets/icons';

import styles from './DatePickerSelect.module.scss';

const DatePickerSelect = () => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_title}>
        <p className={styles.container__content_title}>Date</p>
      </div>
      <div className={styles.container__content_main}>
        <p className={styles.container__content_main_description}>MM/DD/YYYY</p>
        <DateIcon className={styles.container__content_main_icon} />
      </div>
    </div>
  </div>
);

export default DatePickerSelect;
