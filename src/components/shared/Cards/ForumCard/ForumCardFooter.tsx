import { FC } from 'react';

import Typography from 'components/shared/Typography';
import { CommentIcon, ShareIcon } from 'assets/icons';

import styles from './ForumCard.module.scss';

type TForumCardFooterProps = {
  commentsList: any;
};

const ForumCardFooter: FC<TForumCardFooterProps> = ({ commentsList }) => {
  return (
    <div className={styles.container__content__footer}>
      <div className={styles.container__content__footer__blog}>
        <CommentIcon />
        <Typography>{commentsList?.length}</Typography>
      </div>
      <div className={styles.container__content__footer__blog}>
        <ShareIcon />
        <Typography>5</Typography>
      </div>
    </div>
  );
};

export default ForumCardFooter;
