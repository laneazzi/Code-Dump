import { CardsList, ForumCard } from 'components';
import { forumCardsData } from 'constants/Cards/forumCards';
import { todayTopCards } from 'constants/Cards/todayTopCards';

import styles from './Forum.module.scss';

const Forum = () => {
  const cards = forumCardsData.map((card) => <ForumCard key={card.id} card={card} />);

  return (
    <div className={styles.forum}>
      <div className={styles.forum__posts}>{cards}</div>
      <div className={styles.forum__top}>
        <CardsList title='In high today' cardsList={todayTopCards} />
      </div>
    </div>
  );
};

export default Forum;
