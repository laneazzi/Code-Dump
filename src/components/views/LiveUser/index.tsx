import { FC } from 'react';

import { ShareLiveIcon, Verify } from 'assets/icons';
import { Typography, UserLiveFrame, WatchesCount } from 'components';

import { TUserLiveProps } from './types';
import styles from './LiveUser.module.scss';

const LiveUser: FC<TUserLiveProps> = ({ img, count, username, isVerified, videoDescription }) => (
  <div className={styles.container}>
    <div className={styles.container__user}>
      <UserLiveFrame img={img} className={styles.container__user_frame} />
      <div className={styles.container__user_description}>
        <Typography className={styles.container__user_description_username}>
          {username} {isVerified && <Verify />}
        </Typography>
        <Typography className={styles.container__user_description_subtitle}>
          {videoDescription}
        </Typography>
      </div>
    </div>
    <div className={styles.container__watches}>
      <WatchesCount count={count} />
      <ShareLiveIcon />
    </div>
  </div>
);

export default LiveUser;
