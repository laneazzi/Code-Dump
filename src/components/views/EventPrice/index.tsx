import { FC } from 'react';

import { Input } from 'components/shared';

import styles from './EventPrice.module.scss';

type TEventPriceProps = {
  placeholder: string;
};

const EventPrice: FC<TEventPriceProps> = ({ placeholder }) => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_title}>Price</div>
      <div className={styles.container__content_info}>
        <Input
          type='number'
          placeholder={placeholder}
          className={styles.container__content_info_field}
        />
      </div>
    </div>
  </div>
);

export default EventPrice;
