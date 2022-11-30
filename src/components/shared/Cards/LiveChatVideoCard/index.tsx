import { FC } from 'react';

import { Video } from 'components';
import { LiveCardIcon, OneEllipseIcon } from 'assets/icons';

import styles from './LiveChatVideoCard.module.scss';

type TLiveChatVideoCardProps = {
  video: string;
};

const LiveChatVideoCard: FC<TLiveChatVideoCardProps> = ({ video }) => (
  <div className={styles.container}>
    <div className={styles.container__background}>
      <Video src={video} className={styles.container__background_video} autoPlay muted />
      <div className={styles.container__background_description}>
        <LiveCardIcon className={styles.container__background_description_live} />
        <p className={styles.container__background_description_time}>01:23:59</p>
        <OneEllipseIcon className={styles.container__background_description_ellipse} />
        <p className={styles.container__background_description_title}>Morning Live Title Name</p>
      </div>
    </div>
  </div>
);

export default LiveChatVideoCard;
