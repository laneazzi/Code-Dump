import Footer from 'containers/Footer';
import { Video, LogIn } from 'components';

import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <Video
      loop={true}
      muted={true}
      autoPlay={true}
      src={'./login.mp4'}
      className={styles.home__video}
    />
    <LogIn />
    <Footer />
  </div>
);

export default Home;
