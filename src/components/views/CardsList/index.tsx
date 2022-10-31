import { FC } from 'react';

import { TodayTopCard, Typography } from 'components/shared';
import { THighTodayCards } from 'constants/Cards/todayTopCards/types';

import styles from './CardsList.module.scss';

type TCardsListProps = {
  title: string;
  cardsList: THighTodayCards[];
};

const CardsList: FC<TCardsListProps> = ({ cardsList, title }) => {
  const topCards = cardsList.map((card) => <TodayTopCard key={card.id} card={card} />);

  return (
    <div className={styles.top_content}>
      <Typography className={styles.top_content_title}>{title}</Typography>
      {topCards}
    </div>
  );
};

export default CardsList;
