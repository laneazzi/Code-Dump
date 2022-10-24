import { useState } from 'react';

import Footer from 'containers/Footer';
import { Video, Recovery, Registration, SignIn, EventFile } from 'components';

import { EIsActiveType, TIsActiveType } from '../../types/global';

import styles from './Home.module.scss';

const Home = () => {
  const [isActive, setIsActive] = useState<TIsActiveType>({
    [EIsActiveType.RECOVERY]: false,
    [EIsActiveType.REGISTRATION]: false,
  });

  const toggleActive = (value: string) => {
    setIsActive({ ...isActive, [value]: true });
    if (value === '') {
      setIsActive({
        ...isActive,
        [EIsActiveType.RECOVERY]: false,
        [EIsActiveType.REGISTRATION]: false,
      });
    }
  };

  return (
    <div className={styles.home}>
      <Video
        loop={true}
        muted={true}
        autoPlay={true}
        src={'./login.mp4'}
        className={styles.home__video}
      />
      {!isActive[EIsActiveType.RECOVERY] && !isActive[EIsActiveType.REGISTRATION] && (
        <SignIn toggleActive={toggleActive} />
      )}
      {isActive[EIsActiveType.RECOVERY] && !isActive[EIsActiveType.REGISTRATION] && (
        <Recovery toggleActive={toggleActive} />
      )}
      {isActive[EIsActiveType.REGISTRATION] && <Registration toggleActive={toggleActive} />}
      <Footer />

      <EventFile />
    </div>
  );
};

export default Home;
