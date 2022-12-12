import { FC } from 'react';

import Message from '../Message';

import { TCommentProps } from './types';
import styles from './CommentsList.module.scss';

const Comment: FC<TCommentProps> = ({ commentary, getId, post, removeComment }) => {
  return (
    <div key={commentary.id} className={styles.container__content_comments_items}>
      <Message
        getId={getId}
        type='comment'
        postId={post?.id}
        comment={commentary}
        commentId={commentary.id}
        removeComment={removeComment}
      />

      {commentary.replies.length > 0 && (
        <div className={styles.container__content_comments_items_reply}>
          {commentary.replies.map((reply) => (
            <Message
              type='comment'
              getId={getId}
              key={reply.id}
              comment={reply}
              postId={post?.id}
              commentId={commentary.id}
              removeComment={removeComment}
              parentName={reply.parent_comment_id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
