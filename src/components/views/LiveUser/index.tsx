import { FC } from 'react';

import { ShareLiveIcon, Verify } from 'assets/icons';
import { Typography, UserLiveFrame, WatchesCount } from 'components/shared';

import styles from './LiveUser.module.scss';

type TUserLiveProps = {
  img: string;
  count: number;
  username: string;
  isVerified?: boolean;
  videoDescription: string;
};

const LiveUser: FC<TUserLiveProps> = ({ img, count, username, isVerified, videoDescription }) => (
  <div className={styles.container}>
    <div className={styles.container__user}>
      <UserLiveFrame img={img} />
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
