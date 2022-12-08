import { FC, useState } from 'react';
import classNames from 'classnames';

import { Typography } from 'components';
import { notFoundImg } from 'assets/img';
import { EventTypes } from 'types/global/eventTypes';
import { TEvent } from 'store/slices/eventsSlice/types';
import {
  EventCardIcon,
  EventCardSaveIcon,
  TournamentCardIcon,
  FishingGuideCardIcon,
} from 'assets/icons';

import styles from './EventCard.module.scss';

type TEventCardProps = {
  type: EventTypes;
  event: TEvent | any;
};

const EventCard: FC<TEventCardProps> = ({ event, type }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const descriptionClasses = classNames(styles.card__info_description_main, {
    [styles.card__info_description_main_guide]: type === 'GUIDE',
  });

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  const savedIconClassNames = classNames(styles.card__info_icon_item, {
    [styles.card__info_icon_item_active]: isSaved,
  });

  const saveEvent = () => setIsSaved(!isSaved);

  return (
    <div className={styles.card}>
      <div className={styles.card__background}>
        {!isLoaded && (
          <img src={notFoundImg} alt='background' className={styles.card__background_img} />
        )}
        <img
          alt='background'
          onLoad={handleLoaded}
          src={event?.location_url}
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
          ) : type === EventTypes.GUIDE ? (
            <FishingGuideCardIcon />
          ) : null}
          <div className={descriptionClasses}>
            <Typography className={styles.card__info_description_main_title}>
              {event?.title || event?.eventTitle}
            </Typography>
            <Typography className={styles.card__info_description_main_gen}>
              {event?.scheduled_at || event?.eventDate}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
