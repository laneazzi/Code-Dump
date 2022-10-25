import { BlueArrowIcon } from 'assets/icons';

import styles from './HourPicker.module.scss';

const HourPicker = () => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_title}>Hour</div>
      <div className={styles.container__content_hours}>
        <p>
          00
          <BlueArrowIcon className={styles.container__content_hours_icon} />
        </p>
        <p>
          00
          <BlueArrowIcon className={styles.container__content_hours_icon} />
        </p>
        <p>
          AM
          <BlueArrowIcon className={styles.container__content_hours_icon} />
        </p>
      </div>
    </div>
  </div>
);

export default HourPicker;
