import React, { FC } from 'react';
import classNames from 'classnames';

import { Input } from 'components/shared';

import styles from './EventInput.module.scss';

type TEventInputProps = {
  title: string;
  name?: string;
  small?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EventInput: FC<TEventInputProps> = ({ small, title, name, onChange, required }) => {
  const eventInputClasses = classNames(styles.container, {
    [styles.container__small]: small,
  });

  return (
    <div className={eventInputClasses}>
      <p className={styles.container__title}>{title}</p>
      <Input
        name={name}
        onChange={onChange}
        placeholder='Write...'
        className={styles.container__content}
      />
      {!required && <span>Error</span>}
    </div>
  );
};

export default EventInput;
