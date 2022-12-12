import { useContext, useMemo, useState } from 'react';

import { ModalContext } from 'context/Modal';
import { liveVideosCase } from 'utils/localBackend';
import { LiveModal } from 'components/views/Modals';
import { LiveVideoCard, PaginateWrapper } from 'components';

import styles from './Lives.module.scss';

const Lives = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPerPage] = useState<number>(9);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

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

  const filteredLives = liveVideos.slice(firstIndex, lastIndex);

  return (
    <>
      <div className={styles.lives}>{filteredLives}</div>
      <PaginateWrapper
        totalItemsCount={liveVideosCase.length}
        itemsCountPerPage={currentPerPage}
        changePage={changePage}
      />
    </>
  );
};

export default Lives;
