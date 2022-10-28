import { FC } from 'react';

import { CommentsList } from 'components';
import { ForumCard } from 'components/shared';
import CardsList from 'components/views/CardsList';
import { TForumCards } from 'constants/Cards/forumCards/types';
import { commentsList } from 'utils/localBackend/commentsList';
import { recommendedPosts } from 'constants/Cards/todayTopCards';

import styles from './PostModal.module.scss';

type TPostModal = {
  post: TForumCards;
};

const PostModal: FC<TPostModal> = ({ post }) => (
  <div className={styles.container}>
    <div className={styles.container__main}>
      <div className={styles.container__main_post}>
        <ForumCard card={post} />
      </div>
      <div className={styles.container__main_comments}>
        <CommentsList list={commentsList} />
      </div>
    </div>

    <div className={styles.container__recommenders}>
      <CardsList title='Recommended Posts' cardsList={recommendedPosts} inModal />
    </div>
  </div>
);

export default PostModal;
