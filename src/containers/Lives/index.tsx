import { useContext, useMemo } from 'react';

import { LiveVideoCard } from 'components';
import { ModalContext } from 'context/Modal';
import { liveVideosCase } from 'utils/localBackend';
import { LiveModal } from 'components/views/Modals';

import styles from './Lives.module.scss';

const Lives = () => {
  const { openModal } = useContext(ModalContext);

  const openLiveChat = (src: string) => {
    openModal(<LiveModal src={src} />);
  };

  const liveVideos = useMemo(
    () =>
      liveVideosCase.map((video) => (
        <LiveVideoCard key={video.id} video={video} openLiveChat={openLiveChat} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <div className={styles.lives}>{liveVideos}</div>;
};

export default Lives;
