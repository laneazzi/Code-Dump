import { Fragment, useMemo, useState } from 'react';

import { filterItems } from 'utils/filterItems';
import { EventCardInfo } from 'utils/localBackend';
import { EventTypes } from 'types/global/eventTypes';
import { EventCard, Filter, PaginateWrapper } from 'components';

import styles from './Events.module.scss';

const Events = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPerPage] = useState<number>(9);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const events = useMemo(
    () =>
      EventCardInfo.map((event) => (
        <EventCard key={event.id} event={event} type={EventTypes.EVENT} />
      )),
    [],
  );

  const paginateEvents = events.slice(firstIndex, lastIndex);

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.events}>{paginateEvents}</div>
      <PaginateWrapper
        changePage={changePage}
        totalItemsCount={events.length}
        itemsCountPerPage={currentPerPage}
      />
    </Fragment>
  );
};

export default Events;
