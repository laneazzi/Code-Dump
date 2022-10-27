import { LoaderIcon } from 'assets/icons';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loader__wrapper}>
      <p className={styles.loader__wrapper__title}>Loading...</p>
      <div className={styles.loader__wrapper__icon}>
        <LoaderIcon className={styles.loader__spinner} />
      </div>
    </div>
  </div>
);

export default Loader;
