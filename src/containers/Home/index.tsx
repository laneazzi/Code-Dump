import { useState } from 'react';

import Footer from 'containers/Footer';
import { Video, Recovery, Registration, SignIn } from 'components';

import { IsActiveType, TIsActiveType } from '../../types/global';

import styles from './Home.module.scss';

const Home = () => {
  const [isActive, setIsActive] = useState<TIsActiveType>({
    [IsActiveType.RECOVERY]: false,
    [IsActiveType.REGISTRATION]: false,
  });

  const toggleActive = (value: string) => {
    setIsActive({ ...isActive, [value]: true });
    if (value === '') {
      setIsActive({
        ...isActive,
        [IsActiveType.RECOVERY]: false,
        [IsActiveType.REGISTRATION]: false,
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
      {!isActive[IsActiveType.RECOVERY] && !isActive[IsActiveType.REGISTRATION] && (
        <SignIn toggleActive={toggleActive} />
      )}
      {isActive[IsActiveType.RECOVERY] && !isActive[IsActiveType.REGISTRATION] && (
        <Recovery toggleActive={toggleActive} />
      )}
      {isActive[IsActiveType.REGISTRATION] && <Registration toggleActive={toggleActive} />}
      <Footer />
    </div>
  );
};

export default Home;
