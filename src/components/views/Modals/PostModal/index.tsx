import { FC, useEffect } from 'react';

import { CommentsList } from 'components';
import { ForumCard } from 'components/shared';
import CardsList from 'components/views/CardsList';
import { useAppDispatch, useAppSelector } from 'hooks';
import { recommendedPosts } from 'constants/Cards/todayTopCards';
import { TNewPostComment, TPost } from 'store/slices/activitiesSlice/types';
import { getPostCommentByParentPostId } from 'store/slices/activitiesSlice/activitiesThunks';

import styles from './PostModal.module.scss';

type TPostModal = {
  post: TPost;
  comments: TNewPostComment[];
  deletePost: (id: number) => void;
  addComment: (comment: TNewPostComment) => void;
  removeComment: (commentId: number, postId: number) => void;
};

const PostModal: FC<TPostModal> = ({ post, deletePost, addComment, removeComment }) => {
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
