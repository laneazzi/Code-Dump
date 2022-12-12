import { FC } from 'react';
import classNames from 'classnames';

import { TodayTopCard, Typography } from 'components';

import { TCardsListProps } from './types';
import styles from './CardsList.module.scss';

const CardsList: FC<TCardsListProps> = ({ cardsList, title, inModal }) => {
  const topCards = cardsList.map((card) => <TodayTopCard key={card.id} card={card} />);

  const withModalClasses = classNames(styles.top_content, { [styles.top_content_active]: inModal });

  return (
    <div className={withModalClasses}>
      <Typography className={styles.top_content_title}>{title}</Typography>
      <div className={styles.top_content_list}>{topCards}</div>
    </div>
  );
};

export default CardsList;
