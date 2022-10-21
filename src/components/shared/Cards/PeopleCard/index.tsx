import React, { FC } from 'react';
import classNames from 'classnames';

import { GuyImg } from 'assets/img';
import { MessageIcon } from 'assets/icons';
import Typography from 'components/shared/Typography';
import UserImgFrame from 'components/shared/UserImgFrame';

import styles from './PeopleCard.module.scss';
import { TPeopleCard } from './types';

type TPeopleCardProps = {
  people: TPeopleCard;
};

const PeopleCard: FC<TPeopleCardProps> = ({ people }) => {
  const liveStatusClassNames = classNames(styles.container__content__user_status, {
    [styles.container__content__user_status_active]: people.userStatus,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_img}>
          <UserImgFrame img={people.userImg} className={styles.container__content_img_item} />
        </div>

        <div className={styles.container__content__box}>
          <div className={styles.container__content__user}>
            <Typography className={styles.container__content__user_name}>
              {people.userName}
            </Typography>
            <Typography className={liveStatusClassNames}>
              {people.userStatus ? 'Open to Fishing' : 'Unavailable'}
            </Typography>
          </div>
          <div>
            <div>
              <MessageIcon className={styles.container__content__box_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
