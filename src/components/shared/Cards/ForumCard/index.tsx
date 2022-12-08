import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'hooks';
import { GuyImg, notFoundImg } from 'assets/img';
import { TPost } from 'store/slices/activitiesSlice/types';
import { SaveIcon, OptionsIcon, SaveActiveIcon } from 'assets/icons';
import { PostsSlider, Typography, UserImgFrame } from 'components/shared';

import ForumCardFooter from './ForumCardFooter';
import styles from './ForumCard.module.scss';

type TForumCardProps = {
  card: TPost;
  comments?: any[];
  openPost?: (post: TPost) => void;
  deletePost?: (id: number) => void;
};

const ForumCard: FC<TForumCardProps> = ({ card, comments, openPost, deletePost }) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const closeDropDown = () => setIsDrop(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(menuRef, closeDropDown);

  const handelLoaded = () => {
    setIsLoad(true);
  };

  const dropDownClasses = classNames(styles.options__menu, {
    [styles.options__menu_active]: isDrop,
  });

  const showOptions = () => setIsDrop(!isDrop);
  const stopPropagation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const getActiveSlide = (activeSlide: number) => {
    setActiveSlide(activeSlide);
  };

  const posts = !Array.isArray(card?.content_url) ? (
    <>
      {!isLoad && <img src={notFoundImg} />}
      <img src={card?.content_url} onLoad={handelLoaded} />
    </>
  ) : (
    <>
      <div className={styles.container__content__image_count}>
        {activeSlide}/{card?.content_url.length}
      </div>
      <PostsSlider getActiveSlide={getActiveSlide}>
        {card?.content_url.map((img) => (
          <img src={img} key={img} onLoad={handelLoaded} />
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
              FullName
            </Typography>
            <Typography className={styles.container__content__header__title_nick}>
              @UserName
            </Typography>
          </div>
        </div>
        <div className={styles.container__content__header__selects} onClick={handlePropagation}>
          <Typography className={styles.container__content__header__selects__time}>
            {card?.created_at ? card?.created_at : '1 min ago'}
          </Typography>
          <div className={styles.container__content__header__selects_icon} onClick={takePost}>
            {isSaved ? <SaveActiveIcon /> : <SaveIcon />}
          </div>
          <div className={styles.options} onClick={showOptions} ref={menuRef}>
            <OptionsIcon className={styles.options__icon} />
            <div className={dropDownClasses} onClick={stopPropagation}>
              <Typography className={styles.options__menu__item}>Edit</Typography>
              <Typography
                className={styles.options__menu__item}
                onClick={() => deletePost?.(card?.id)}
              >
                Delete
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__content__text}>{card?.description}</div>
      <div className={styles.container__content__image} onClick={handlePropagation}>
        {posts}
      </div>

      <ForumCardFooter commentsList={comments} />
    </div>
  );
};

export default ForumCard;
