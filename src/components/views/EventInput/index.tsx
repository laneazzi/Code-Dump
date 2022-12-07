import React, { FC } from 'react';
import classNames from 'classnames';

import { Input } from 'components/shared';

import styles from './EventInput.module.scss';

type TEventInputProps = {
  title: string;
  name?: string;
  small?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EventInput: FC<TEventInputProps> = ({ small, title, name, onChange }) => {
  const eventInputClasses = classNames(styles.container, {
    [styles.container__small]: small,
  });

  return (
    <div className={eventInputClasses}>
      <p className={styles.container__title}>{title}</p>
      <Input
        placeholder='Write...'
        className={styles.container__content}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default EventInput;
