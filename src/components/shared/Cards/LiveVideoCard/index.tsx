import { FC } from 'react';

import Typography from 'components/shared/Typography';
import { LiveCardIcon, WatchIcon } from 'assets/icons';

import { TLiveVideoCard } from './types';
import styles from './LiveVideoCard.module.scss';

type TLiveCardProps = {
  video: TLiveVideoCard;
};

const LiveVideoCard: FC<TLiveCardProps> = ({ video }) => (
  <div className={styles.card}>
    <div className={styles.card__background}>
      <img src={video.img} alt='background' className={styles.card__background_img} />
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

export default LiveVideoCard;
