import { FC } from 'react';
import classNames from 'classnames';

import { Input } from 'components/shared';

import styles from './EventInput.module.scss';

type TEventInputProps = {
  title: string;
  small?: boolean;
};

const EventInput: FC<TEventInputProps> = ({ small, title }) => {
  const eventInputClasses = classNames(styles.container, {
    [styles.container__small]: small,
  });

  return (
    <div className={eventInputClasses}>
      <p className={styles.container__title}>{title}</p>
      <Input placeholder='Write...' className={styles.container__content} />
    </div>
  );
};

export default EventInput;
