import { FC } from 'react';

import Typography from 'components/shared/Typography';
import UserImgFrame from 'components/shared/UserImgFrame';

import { THighTodayCards } from '../../../../constants/Cards/todayTopCards/types';

import styles from './TodayTopCard.module.scss';

interface ITodayTopCardProps {
  card: THighTodayCards;
}

const TodayTopCard: FC<ITodayTopCardProps> = ({ card }) => (
  <div className={styles.top__card}>
    <div>
      <img src={card.postImg} alt='test' />
    </div>
    <div className={styles.top__card_absolute}>
      <div className={styles.top__card_absolute_box}>
        <UserImgFrame img={card.userImg} className={styles.top__card_absolute_box_image} />
        <div className={styles.top__card_absolute_box_user}>
          <Typography>{card.name}</Typography>
          <Typography>{card.nickName}</Typography>
        </div>
      </div>
    </div>
  </div>
);

export default TodayTopCard;
