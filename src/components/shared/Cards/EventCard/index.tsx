import React, { FC, useState } from 'react';
import classNames from 'classnames';

import Typography from 'components/shared/Typography';
import { EEventTypes } from 'types/global/eventTypes';
import { EventCardIcon, EventCardSaveIcon, TournamentCardIcon } from 'assets/icons';

import { TEventCard } from './types';
import styles from './EventCard.module.scss';

type TEventCardProps = {
  event: TEventCard;
  type: EEventTypes;
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
        <img src={event.img} alt='img' className={styles.card__background_img} />
        <div className={styles.card__background_color} />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__info_icon}>
          <EventCardSaveIcon onClick={saveEvent} className={savedIconClassNames} />
        </div>
        <div className={styles.card__info_description}>
          {type === EEventTypes.EVENT ? (
            <EventCardIcon />
          ) : type === EEventTypes.TOURNAMENT ? (
            <TournamentCardIcon />
          ) : null}
          <div className={styles.card__info_description_main}>
            <Typography tagName='p' className={styles.card__info_description_main_title}>
              {event.eventTitle}
            </Typography>
            <Typography tagName='p' className={styles.card__info_description_main_gen}>
              {event.eventDate}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
