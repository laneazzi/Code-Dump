import { FC, useState } from 'react';

import { commentsFilter } from 'utils/commentsFilter';
import { ChatField, CommentsFilter } from 'components';
import { TPost } from 'store/slices/activitiesSlice/types';

import Comment from './Comment';
import { TCommentsListProps } from './types';
import styles from './CommentsList.module.scss';

const CommentsList: FC<TCommentsListProps> = ({
  list,
  post,
  addComment,
  removeComment,
  replyComment,
}) => {
  const [isReply, setIsReply] = useState<boolean>(false);
  const [repliedId, setRepliedId] = useState<number | undefined>();

  const getId = (id: number) => {
    setRepliedId(id);
    setIsReply(!isReply);
  };

  const newList = commentsFilter(list);

  const commentaries = newList?.map((commentary) => {
    return (
      <Comment
        getId={getId}
        key={commentary.id}
        post={post as TPost}
        commentary={commentary}
        removeComment={removeComment}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div>
          <ChatField
            postId={post?.id}
            isReply={isReply}
            repliedId={repliedId}
            setIsReply={setIsReply}
            addComment={addComment}
            replyComment={replyComment}
          />
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
