import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.lds__ring}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
