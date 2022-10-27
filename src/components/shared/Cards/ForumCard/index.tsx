import { FC, useState } from 'react';

import { Typography, UserImgFrame } from 'components/shared';
import {
  Verify,
  SaveIcon,
  ShareIcon,
  ShareUpIcon,
  OptionsIcon,
  CommentIcon,
  ShareDownIcon,
  SaveActiveIcon,
} from 'assets/icons';
import { GuyImg } from 'assets/img';
import { TForumCards } from 'constants/Cards/forumCards/types';

import styles from './ForumCard.module.scss';

type TForumCardProps = {
  card: TForumCards;
};

const ForumCard: FC<TForumCardProps> = ({ card }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const takePost = () => setIsSaved(!isSaved);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__header}>
          <UserImgFrame img={GuyImg} className={styles.container__content__header__box} />
          <div className={styles.container__content__header__title}>
            <Typography className={styles.container__content__header__title_username}>
              {card.name}
              {card.isVerified && <Verify />}
            </Typography>
            <Typography className={styles.container__content__header__title_nick}>
              {card.nickName}
            </Typography>
          </div>
        </div>
        <div className={styles.container__content__header__selects}>
          <Typography className={styles.container__content__header__selects__time}>
            {card.postedTime}
          </Typography>
          <div className={styles.container__content__header__selects_icon} onClick={takePost}>
            {isSaved ? <SaveActiveIcon /> : <SaveIcon />}
          </div>
          <OptionsIcon />
        </div>
      </div>
      <div className={styles.container__content__text}>{card.postDescription}</div>
      <div className={styles.container__content__image}>
        <img src={card.postImg} alt='Fish' />
      </div>
      <div className={styles.container__content__footer}>
        <div className={styles.container__content__footer__blog}>
          <ShareUpIcon />
          <Typography>{card.sharedUpCounts}</Typography>
          <ShareDownIcon />
        </div>
        <div className={styles.container__content__footer__blog}>
          <CommentIcon />
          <Typography>{card.commentsCount}</Typography>
        </div>
        <div className={styles.container__content__footer__blog}>
          <ShareIcon />
          <Typography>{card.sharedCount}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
