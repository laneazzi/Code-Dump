import { FC } from 'react';

import { Input } from 'components/shared';

import styles from './EventPrice.module.scss';

const EventPrice: FC = () => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_title}>Price</div>
      <div className={styles.container__content_info}>
        <Input
          type='number'
          placeholder='Add Price'
          className={styles.container__content_info_field}
        />
      </div>
    </div>
  </div>
);

export default EventPrice;
