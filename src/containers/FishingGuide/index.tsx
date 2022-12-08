import { useMemo, useState } from 'react';

import { GuideCardInfo } from 'utils/localBackend';
import { EventTypes } from 'types/global/eventTypes';
import { fishingGuideFilters } from 'utils/filterItems';
import { EventCard, Filter, PaginateWrapper } from 'components';

import styles from './FishingGuide.module.scss';

const FishingGuide = () => {
  const [currentPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const guides = useMemo(
    () =>
      GuideCardInfo.map((event) => (
        <EventCard key={event?.id} event={event} type={EventTypes.GUIDE} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [GuideCardInfo],
  );

  const paginateEvents = guides.slice(firstIndex, lastIndex);
  return (
    <>
      <Filter filterItems={fishingGuideFilters} />
      {paginateEvents.length <= 0 ? (
        <div className={styles.guides__empty}>No Guides added yet</div>
      ) : (
        <>
          <div className={styles.guides}>{paginateEvents}</div>

          <PaginateWrapper
            changePage={changePage}
            totalItemsCount={guides.length}
            itemsCountPerPage={currentPerPage}
          />
        </>
      )}
    </>
  );
};

export default FishingGuide;
