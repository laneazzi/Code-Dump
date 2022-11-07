import { FC } from 'react';

import Typography from 'components/shared/Typography';
import UserImgFrame from 'components/shared/UserImgFrame';

import { THighTodayCards } from '../../../../constants/Cards/todayTopCards/types';

import styles from './TodayTopCard.module.scss';

type TTodayTopCardProps = {
  card: THighTodayCards;
};

const TodayTopCard: FC<TTodayTopCardProps> = ({ card }) => (
  <div className={styles.top__card}>
    <div className={styles.top__card_img}>
      <img src={card.postImg} alt='post' />
    </div>
    <div className={styles.top__card_absolute}>
      <div className={styles.top__card_absolute_box}>
        <UserImgFrame img={card.userImg} className={styles.top__card_absolute_box_image} />
        <div className={styles.top__card_absolute_box_user}>
          <Typography className={styles.username}>{card.name}</Typography>
          <Typography className={styles.nickname}>{card.nickName}</Typography>
        </div>
      </div>
    </div>
  </div>
);

export default TodayTopCard;
