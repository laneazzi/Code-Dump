import { FC, useRef, useState } from 'react';

import { Video } from 'components';
import { VideoPauseIcon, VideoPlayIcon } from 'assets/icons';

import styles from './VideoCard.module.scss';

type TVideoCardProps = {
  video: string;
};

const VideoCard: FC<TVideoCardProps> = ({ video }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>();

  const videoHandler = (control: string) => {
    if (control === 'play') {
      videoRef.current?.play();
      setIsPlay(true);
    } else if (control === 'pause') {
      videoRef.current?.pause();
      setIsPlay(false);
    }
  };

  return (
    <div className={styles.video}>
      <Video src={video} className={styles.video__item} ref={videoRef} />
      {isPlay ? (
        <VideoPauseIcon className={styles.video__icon} onClick={() => videoHandler('pause')} />
      ) : (
        <VideoPlayIcon className={styles.video__icon} onClick={() => videoHandler('play')} />
      )}
    </div>
  );
};

export default VideoCard;
