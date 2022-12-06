import { Fragment, useEffect, useMemo, useState } from 'react';

import { filterItems } from 'utils/filterItems';
import { EventTypes } from 'types/global/eventTypes';
import { useAppDispatch, useAppSelector } from 'hooks';
import { EventCard, Filter, PaginateWrapper } from 'components';
import { getMyEvents } from 'store/slices/eventsSlice/eventsThunks';

import styles from './Events.module.scss';

const Events = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyEvents());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { events } = useAppSelector((state) => state.events);

  const [currentPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const event = useMemo(
    () =>
      events.map((event) => <EventCard key={event?.id} event={event} type={EventTypes.EVENT} />),
    [events],
  );

  const paginateEvents = event.slice(firstIndex, lastIndex);

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
