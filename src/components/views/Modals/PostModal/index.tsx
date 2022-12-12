import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { CommentsList, ForumCard, CardsList } from 'components';
import { recommendedPosts } from 'constants/Cards/todayTopCards';
import { getPostCommentByParentPostId } from 'store/slices/activitiesSlice/activitiesThunks';

import { TPostModal } from './types';
import styles from './PostModal.module.scss';

const PostModal: FC<TPostModal> = ({
  post,
  deletePost,
  addComment,
  replyComment,
  removeComment,
}) => {
  const dispatch = useAppDispatch();
  const { currentActivityComments } = useAppSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getPostCommentByParentPostId({ parent_post_id: post?.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <div className={styles.container__main_post}>
          <ForumCard comments={currentActivityComments} card={post} deletePost={deletePost} />
        </div>
        <div className={styles.container__main_comments}>
          <CommentsList
            post={post}
            addComment={addComment}
            removeComment={removeComment}
            replyComment={replyComment}
            list={currentActivityComments}
          />
        </div>
      </div>

      <div className={styles.container__recommenders}>
        <CardsList title='Recommended Posts' cardsList={recommendedPosts} inModal />
      </div>
    </div>
  );
};

export default PostModal;
