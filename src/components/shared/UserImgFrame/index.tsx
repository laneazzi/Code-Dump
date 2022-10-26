import { FC } from 'react';
import classNames from 'classnames';

import styles from './UserImgFrame.module.scss';

type IUserImgFrameProps = {
  img: string;
  className?: string;
  innerClassName?: string;
};

const UserImgFrame: FC<IUserImgFrameProps> = ({ img, className, innerClassName }) => {
  const frameClassNames = classNames(styles.frame, className);

  const innerClasses = classNames(styles.frame__img, innerClassName);

  return (
    <div className={frameClassNames}>
      <img src={img} alt='img' className={innerClasses} />
    </div>
  );
};

export default UserImgFrame;
