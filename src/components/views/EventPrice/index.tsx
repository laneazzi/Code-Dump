import { FC } from 'react';

import styles from './EventPrice.module.scss';

type TEventPriceProps = {
  price?: number;
};

const EventPrice: FC<TEventPriceProps> = () => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_title}>Price</div>
      <div className={styles.container__content_info}>$ </div>
    </div>
  </div>
);

export default EventPrice;
