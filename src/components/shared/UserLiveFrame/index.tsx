import { FC } from 'react';

import { UserImgFrame } from 'components/shared';
import { LiveCircleIcon, LiveEllipseBackIcon, LiveEllipseIcon } from 'assets/icons';

import styles from './UserLiveFrame.module.scss';

type TUserLiveFrameProps = {
  img: string;
};

const UserLiveFrame: FC<TUserLiveFrameProps> = ({ img }) => (
  <div className={styles.container}>
    <LiveCircleIcon className={styles.container__box} />
    <LiveEllipseBackIcon className={styles.container__item} />
    <LiveEllipseIcon className={styles.container__live} />
    <UserImgFrame img={img} className={styles.container__img} />
  </div>
);

export default UserLiveFrame;
