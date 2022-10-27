import { FC } from 'react';
import classNames from 'classnames';

import styles from './UserImgFrame.module.scss';

type TUserImgFrameProps = {
  img: string;
  className?: string;
  innerClassName?: string;
};

const UserImgFrame: FC<TUserImgFrameProps> = ({ img, className, innerClassName }) => {
  const frameClassNames = classNames(styles.frame, className);

  const innerClasses = classNames(styles.frame__img, innerClassName);

  return (
    <div className={frameClassNames}>
      <img src={img} alt='user' className={innerClasses} />
    </div>
  );
};

export default UserImgFrame;
