import { FC } from 'react';

import { CommentsFilter } from 'components/shared';
import { TComments } from 'types/global/messagesTypes';

import Message from '../Message';
import ChatField from '../ChatField';

import styles from './CommentsList.module.scss';

type TCommentsListProps = {
  list: TComments[];
};

const CommentsList: FC<TCommentsListProps> = ({ list }) => {
  const commentaries = list.map((commentary) => {
    return (
      <div key={commentary.id} className={styles.container__content_comments_items}>
        <Message user={commentary} type='comment' />
        {commentary.replies.length > 0 && (
          <div className={styles.container__content_comments_items_reply}>
            {commentary.replies.map((reply) => (
              <Message key={reply.id} user={reply} type='comment' />
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div>
          <ChatField />
        </div>
        <div>
          <CommentsFilter commentsCount={commentaries.length} />
        </div>
        <div className={styles.container__content_comments}> {commentaries}</div>
      </div>
    </div>
  );
};

export default CommentsList;
