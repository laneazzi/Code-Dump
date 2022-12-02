import React, { FC, useState } from 'react';

import { PostsSlider, Typography, UserImgFrame } from 'components/shared';
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
  openPost?: (post: TForumCards) => void;
};

const ForumCard: FC<TForumCardProps> = ({ card, openPost }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const getActiveSlide = (activeSlide: number) => {
    setActiveSlide(activeSlide);
  };

  const posts = !Array.isArray(card.postImg) ? (
    <img src={card.postImg} alt='Fish' />
  ) : (
    <>
      <div className={styles.container__content__image_count}>
        {activeSlide}/{card.postImg.length}
      </div>
      <PostsSlider getActiveSlide={getActiveSlide}>
        {card.postImg.map((img) => (
          <img src={img} key={img} />
        ))}
      </PostsSlider>
    </>
  );

  const takePost = () => setIsSaved(!isSaved);

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container} onClick={() => openPost?.(card)}>
      <div className={styles.container__content}>
        <div className={styles.container__content__header}>
          <UserImgFrame img={GuyImg} className={styles.container__content__header__box} />
          <div className={styles.container__content__header__title}>
            <Typography className={styles.container__content__header__title_username}>
              {card.name}
              {card.isVerified && <Verify className={styles.verify} />}
            </Typography>
            <Typography className={styles.container__content__header__title_nick}>
              {card.nickName}
            </Typography>
          </div>
        </div>
        <div className={styles.container__content__header__selects} onClick={handlePropagation}>
          <Typography className={styles.container__content__header__selects__time}>
            {card.postedTime}
          </Typography>
          <div className={styles.container__content__header__selects_icon} onClick={takePost}>
            {isSaved ? <SaveActiveIcon /> : <SaveIcon />}
          </div>
          <OptionsIcon className={styles.options} />
        </div>
      </div>
      <div className={styles.container__content__text}>{card.postDescription}</div>
      <div className={styles.container__content__image} onClick={handlePropagation}>
        {posts}
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
