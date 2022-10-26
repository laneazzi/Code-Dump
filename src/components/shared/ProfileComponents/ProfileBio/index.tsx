import { FC } from 'react';

import Typography from 'components/shared/Typography';

import styles from './ProfileBio.module.scss';

type TProfileBioProps = {
  info: string;
};

const ProfileBio: FC<TProfileBioProps> = ({ info }) => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <Typography className={styles.container__content_title}>Bio</Typography>
      <Typography className={styles.container__content_description}>{info}</Typography>
    </div>
  </div>
);

export default ProfileBio;
