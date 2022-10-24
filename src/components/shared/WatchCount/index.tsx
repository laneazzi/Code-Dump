import React, { FC } from 'react';

import { WatchCountIcon } from 'assets/icons';

import styles from './WatchCount.module.scss';

type TWatchCountProps = {
  count: number;
};

const WatchCount: FC<TWatchCountProps> = ({ count }) => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <WatchCountIcon />
      {count} Watching
    </div>
  </div>
);

export default WatchCount;
