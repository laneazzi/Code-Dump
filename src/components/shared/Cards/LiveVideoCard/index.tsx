import { FC } from 'react';

import { Typography, Video } from 'components';
import { LiveCardIcon, WatchIcon } from 'assets/icons';

import { TLiveVideoCard } from './types';
import styles from './LiveVideoCard.module.scss';

type TLiveCardProps = {
  openLiveChat: (video: string) => void;
  video: TLiveVideoCard;
};

const LiveVideoCard: FC<TLiveCardProps> = ({ video, openLiveChat }) => {
  return (
    <div className={styles.card} onClick={() => openLiveChat(video.src)}>
      <div className={styles.card__background}>
        <Video src={video.src} className={styles.card__background_img} autoPlay loop muted />
        <div className={styles.card__background_color} />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__info_icon}>
          <LiveCardIcon className={styles.card__info_icon_item} />
        </div>
        <div className={styles.card__info_description}>
          <div className={styles.card__info_description_main}>
            <Typography className={styles.card__info_description_main_title}>
              {video.title}
            </Typography>
            <Typography className={styles.card__info_description_main_watches}>
              <WatchIcon /> {video.watchCount} Watching
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoCard;
