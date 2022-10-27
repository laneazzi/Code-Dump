import { Fragment, useMemo } from 'react';

import { EventCard } from 'components';
import { filterItems } from 'utils/filterItems';
import { EventCardInfo } from 'utils/localBackend';
import Filter from 'components/shared/Filter/Filter';
import { EEventTypes } from 'types/global/eventTypes';

import styles from './Events.module.scss';

const Events = () => {
  const events = useMemo(
    () =>
      EventCardInfo.map((event) => (
        <EventCard key={event.id} event={event} type={EEventTypes.EVENT} />
      )),
    [],
  );

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div className={styles.events}>{events}</div>
    </Fragment>
  );
};

export default Events;
