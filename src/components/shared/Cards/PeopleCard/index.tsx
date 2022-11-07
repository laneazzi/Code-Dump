import React, { FC } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { MessageIcon } from 'assets/icons';
import Typography from 'components/shared/Typography';
import UserImgFrame from 'components/shared/UserImgFrame';

import { TPeopleCard } from './types';
import styles from './PeopleCard.module.scss';

type TPeopleCardProps = {
  people: TPeopleCard;
  startTheChat: boolean;
  setStartTheChat: (value: boolean) => void;
};

const PeopleCard: FC<TPeopleCardProps> = ({ people, startTheChat, setStartTheChat }) => {
  const liveStatusClassNames = classNames(styles.container__content__user_status, {
    [styles.container__content__user_status_active]: people.userStatus,
  });

  const openChatWithUser = () => setStartTheChat(!startTheChat);

  const navigate = useNavigate();

  const goToTheProfilePage = () => navigate(`/user-page${people.id}`);

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container}>
      <div onClick={goToTheProfilePage} className={styles.container__content}>
        <UserImgFrame img={people.userImg} className={styles.container__content_img} />

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
            <div onClick={handlePropagation}>
              <MessageIcon
                className={styles.container__content__box_icon}
                onClick={openChatWithUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
