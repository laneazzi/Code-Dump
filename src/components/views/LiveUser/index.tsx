import { FC } from 'react';

import { ShareLiveIcon, Verify } from 'assets/icons';
import { UserLiveFrame } from 'components/shared';
import WatchCount from 'components/shared/WatchCount';

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
    <UserLiveFrame img={img} />

    <div className={styles.container__info}>
      <div className={styles.container__info_username}>
        {username} {isVerified && <Verify />}
      </div>
      <div className={styles.container__info_description}>{videoDescription}</div>
    </div>
    <div className={styles.container__watches}>
      <WatchCount count={count} />
      <ShareLiveIcon />
    </div>
  </div>
);

export default LiveUser;
