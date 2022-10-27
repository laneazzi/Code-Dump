import { FC } from 'react';

import { TComments } from 'types/global/messagesTypes';

import Message from '../Message';

import styles from './CommentsList.module.scss';

type TCommentsListProps = {
  list: TComments[];
};

const CommentsList: FC<TCommentsListProps> = ({ list }) => {
  const commentaries = list.map((commentary) => {
    return (
      <div key={commentary.id} className={styles.container__items}>
        <Message user={commentary} type='comment' />
        {commentary.replies.length > 0 && (
          <div className={styles.container__items_reply}>
            {commentary.replies.map((reply) => (
              <Message key={commentary.id} user={reply} type='comment' />
            ))}
          </div>
        )}
      </div>
    );
  });

  return <div className={styles.container}>{commentaries}</div>;
};

export default CommentsList;
