import { FC, useState } from 'react';
import classNames from 'classnames';

import { Typography } from 'components';
import { EventTypes } from 'types/global/eventTypes';
import { TEvent } from 'store/slices/eventsSlice/types';
import { EventCardIcon, EventCardSaveIcon, TournamentCardIcon } from 'assets/icons';

import styles from './EventCard.module.scss';

type TEventCardProps = {
  type: EventTypes;
  event: TEvent | any;
};

const EventCard: FC<TEventCardProps> = ({ event, type }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const savedIconClassNames = classNames(styles.card__info_icon_item, {
    [styles.card__info_icon_item_active]: isSaved,
  });

  const saveEvent = () => setIsSaved(!isSaved);

  return (
    <div className={styles.card}>
      <div className={styles.card__background}>
        <img
          src={event?.location_url || event?.img}
          alt='background'
          className={styles.card__background_img}
        />
        <div className={styles.card__background_color} />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__info_icon}>
          <EventCardSaveIcon onClick={saveEvent} className={savedIconClassNames} />
        </div>
        <div className={styles.card__info_description}>
          {type === EventTypes.EVENT ? (
            <EventCardIcon />
          ) : type === EventTypes.TOURNAMENT ? (
            <TournamentCardIcon />
          ) : null}
          <div className={styles.card__info_description_main}>
            <Typography className={styles.card__info_description_main_title}>
              {event?.title || event?.eventTitle}
            </Typography>
            <Typography className={styles.card__info_description_main_gen}>
              {event?.title || event?.eventDate}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
