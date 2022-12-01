import { FC } from 'react';
import classNames from 'classnames';

import styles from './ProfileSideImg.module.scss';

type TProfileSideImgProps = {
  img: string | undefined;
  className?: string;
};

const ProfileSideImg: FC<TProfileSideImgProps> = ({ img, className }) => {
  const backgroundClasses = classNames(styles.container, className);

  return (
    <div className={backgroundClasses}>
      {img === null ? (
        <div className={styles.container__banner}>No banner</div>
      ) : (
        <img src={img} alt='user background' />
      )}
    </div>
  );
};
export default ProfileSideImg;
