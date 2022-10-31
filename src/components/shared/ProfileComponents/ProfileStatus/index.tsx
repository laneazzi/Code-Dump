import { FC } from 'react';
import classNames from 'classnames';

import { GuyImg, UserImg } from 'assets/img';
import Typography from 'components/shared/Typography';
import UserImgFrame from 'components/shared/UserImgFrame';

import ProfileStatusButton from './ProfileStatusButton/ProfileStatusButton';
import styles from './ProfileStatus.module.scss';

type TProfileStatusProps = {
  isActive: boolean;
  className?: string;
  frameImg?: string;
  frameClassName?: string;
  setIsActive: (value: boolean) => void;
};

const ProfileStatus: FC<TProfileStatusProps> = ({
  isActive,
  frameImg,
  className,
  setIsActive,
  frameClassName,
}) => {
  const profileStatusClasses = classNames(styles.container, className);

  const frameClasses = classNames(styles.container__content_head_img, frameClassName);

  return (
    <div className={profileStatusClasses}>
      <div className={styles.container__content}>
        <div className={styles.container__content_head}>
          <UserImgFrame img={frameImg || UserImg} className={frameClasses} />
        </div>
        <div className={styles.container__content_info}>
          <Typography className={styles.container__content_info_username}>Username</Typography>
          <Typography className={styles.container__content_info_location}>Montana, EUA</Typography>
        </div>
        <div className={styles.container__content_status}>
          <div className={styles.container__content_status_inner}>
            <Typography>Open To Fishing</Typography>
            <ProfileStatusButton isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
