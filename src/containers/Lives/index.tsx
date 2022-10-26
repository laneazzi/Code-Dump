import { useMemo } from 'react';

import { LiveVideoCard } from 'components';
import { liveVideosCase } from 'utils/localBackend';

import styles from './Lives.module.scss';

const Lives = () => {
  const liveVideos = useMemo(
    () => liveVideosCase.map((video) => <LiveVideoCard key={video.id} video={video} />),
    [],
  );

  return <div className={styles.lives}>{liveVideos}</div>;
};

export default Lives;
