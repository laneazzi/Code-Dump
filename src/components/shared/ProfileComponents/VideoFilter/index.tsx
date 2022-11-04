import { FC } from 'react';

import { VideoAddIcon } from 'assets/icons';
import Typography from 'components/shared/Typography';

import styles from './VideoFilter.module.scss';

type TVideFilterProps = {
  videoCount: number;
  livesCount: number;
};

const VideoFilter: FC<TVideFilterProps> = ({ videoCount, livesCount }) => (
  <div className={styles.container}>
    <div className={styles.container__filters}>
      <div className={styles.container__filters_btn} role='button'>
        Videos ({videoCount})
      </div>
      <div className={styles.container__filters_btn} role='button'>
        Past Lives ({livesCount})
      </div>
    </div>
    <label className={styles.container__filters_add} role='button'>
      <input type='file' />
      <VideoAddIcon className={styles.container__filters_add_icon} />
      <Typography tagName='span' className={styles.container__filters_add_title}>
        Add New Video
      </Typography>
    </label>
  </div>
);

export default VideoFilter;
