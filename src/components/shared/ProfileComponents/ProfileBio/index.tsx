import { FC, useState } from 'react';

import { useWindowSize } from 'hooks';
import { Typography } from 'components';

import styles from './ProfileBio.module.scss';

type TProfileBioProps = {
  info: string;
};

const ProfileBio: FC<TProfileBioProps> = ({ info = 'No Bio' }) => {
  const width = useWindowSize().width;
  const [lessText, setLessText] = useState<boolean>(false);

  const showHideText = () => setLessText(!lessText);
  const buttonSubTitle = lessText ? 'Show less' : 'Show more';

  const text = lessText && width < 568 ? info : `${info.substring(0, 50)}...`;
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Typography className={styles.container__content_title}>Bio</Typography>

        <Typography className={styles.container__content_description}>
          {width < 568 ? text : info}

          {width < 568 && (
            <button onClick={showHideText} className={styles.container__content_description_show}>
              {buttonSubTitle}
            </button>
          )}
        </Typography>
      </div>
    </div>
  );
};

export default ProfileBio;
