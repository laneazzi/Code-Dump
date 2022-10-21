import { Fragment } from 'react';

import { EventCard } from 'components';
import { highPostImg } from 'assets/img';
import Filter from 'components/shared/Filter/Filter';
import { TFilter } from 'components/shared/Filter/types';
import { EventCardIcon } from 'assets/icons';

const Events = () => {
  const event = {
    id: 1,
    img: highPostImg,
    eventTitle: 'Event Title Name',
    eventDate: 'September 29, 2022 - 11AM',
  };

  const filterItems: TFilter[] = [
    { id: 0, name: 'Today' },
    { id: 1, name: 'This Week' },
    { id: 2, name: 'Next Week' },
    { id: 3, name: 'This Month' },
  ];

  return (
    <Fragment>
      <Filter filterItems={filterItems} />
      <div>
        <EventCard event={event} icon={<EventCardIcon />} />
      </div>
    </Fragment>
  );
};

export default Events;
