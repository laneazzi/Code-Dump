import { FC } from 'react';

import { CommentsFilter } from 'components/shared';
import { TNewPostComment, TPost } from 'store/slices/activitiesSlice/types';

import Message from '../Message';
import ChatField from '../ChatField';

import styles from './CommentsList.module.scss';

type TCommentsListProps = {
  post?: TPost;
  list: TNewPostComment[];
  addComment: (comment: TNewPostComment) => void;
  removeComment: (commentId: number, postId: number) => void;
};

const CommentsList: FC<TCommentsListProps> = ({ list, post, addComment, removeComment }) => {
  const commentaries =
    Array.isArray(list) &&
    list?.map((commentary: any) => {
      return (
        <div key={commentary.id} className={styles.container__content_comments_items}>
          <Message
            type='comment'
            user={commentary}
            postId={post?.id}
            commentId={commentary.id}
            removeComment={removeComment}
          />
        </div>
      );
    });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div>
          <ChatField postId={post?.id} addComment={addComment} />
        </div>

        <div>
          <CommentsFilter commentsCount={list.length} />
        </div>
        <div className={styles.container__content_comments}>{commentaries}</div>
      </div>
    </div>
  );
};

export default CommentsList;
