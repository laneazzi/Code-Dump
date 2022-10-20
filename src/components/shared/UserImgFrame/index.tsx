import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './UserImgFrame.module.scss';

type IUserImgFrameProps = {
  className?: string;
  img: string;
};

const UserImgFrame: FC<IUserImgFrameProps> = ({ img, className }) => {
  const frameClassNames = classNames(styles.frame, className);

  return (
    <div className={frameClassNames}>
      <div className={styles.frame__img}>
        <img src={img} alt='img' />
      </div>
    </div>
  );
};

export default UserImgFrame;
