import { useContext } from 'react';

import { ModalContext } from 'context/Modal';
import { CardsList, ForumCard } from 'components';
import { PostModal } from 'components/views/Modals';
import { forumCardsData } from 'constants/Cards/forumCards';
import { todayTopCards } from 'constants/Cards/todayTopCards';
import { TForumCards } from 'constants/Cards/forumCards/types';

import styles from './Forum.module.scss';

const Forum = () => {
  const { openModal } = useContext(ModalContext);

  const openPost = (post: TForumCards) => openModal(<PostModal post={post} />);

  const cards = forumCardsData.map((card) => (
    <ForumCard key={card.id} card={card} openPost={openPost} />
  ));

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
