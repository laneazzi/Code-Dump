import { FC } from 'react';

import { Input, Typography } from 'components';

import { TEventPriceProps } from './types';
import styles from './EventPrice.module.scss';

const EventPrice: FC<TEventPriceProps> = ({ placeholder, field }) => (
  <div className={styles.container__content}>
    <div className={styles.container__content_title}>Price</div>

    {field?.isEmpty && field.isBlur && (
      <Typography className={styles.container__content__error} tagName='span'>
        {field.errorMessage}
      </Typography>
    )}

    <div className={styles.container__content_info}>
      <Input
        type='number'
        value={field?.value}
        onBlur={field?.onBlur}
        placeholder={placeholder}
        onChange={field?.onChange}
        className={styles.container__content_info_field}
      />
    </div>
  </div>
);

export default EventPrice;
