import { FC } from 'react';

import styles from './ProfileSideImg.module.scss';

type TProfileSideImgProps = {
  img: string;
};

const ProfileSideImg: FC<TProfileSideImgProps> = ({ img }) => (
  <div className={styles.container}>
    <img src={img} alt='img' />
  </div>
);
export default ProfileSideImg;
