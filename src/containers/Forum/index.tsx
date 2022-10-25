import { forumCardsData } from 'constants/Cards/forumCards';
import { todayTopCards } from 'constants/Cards/todayTopCards';
import { ForumCard, TodayTopCard, Typography } from 'components';

import styles from './Forum.module.scss';

const Forum = () => {
  const cards = forumCardsData.map((card) => <ForumCard key={card.id} card={card} />);

  const topCards = todayTopCards.map((card) => <TodayTopCard key={card.id} card={card} />);

  return (
    <div className={styles.forum}>
      <div className={styles.forum__posts}>{cards}</div>
      <div className={styles.forum__top}>
        <div className={styles.forum__top_content}>
          <Typography className={styles.forum__top_content_title}>In high today</Typography>
          {topCards}
        </div>
      </div>
    </div>
  );
};

export default Forum;
