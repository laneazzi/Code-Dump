import { FC } from 'react';
import classNames from 'classnames';

import { Input, Typography } from 'components';

import { TEventInputProps } from './types';
import styles from './EventInput.module.scss';

const EventInput: FC<TEventInputProps> = ({ small, title, name, field, type = 'string' }) => {
  const eventInputClasses = classNames(styles.container, {
    [styles.container__small]: small,
  });

  return (
    <div className={eventInputClasses}>
      <p className={styles.container__title}>{title}</p>

      {field?.isEmpty && field.isBlur && (
        <Typography tagName='span' className={styles.container__title__error}>
          {field.errorMessage}
        </Typography>
      )}

      <Input
        name={name}
        type={type}
        value={field?.value}
        onBlur={field?.onBlur}
        placeholder='Write...'
        onChange={field?.onChange}
        className={styles.container__content}
      />
    </div>
  );
};

export default EventInput;
