import styles from './TextArea.module.scss';

const TextArea = () => (
  <div className={styles.container}>
    <p className={styles.container__title}>Description</p>
    <textarea placeholder='Write...' className={styles.container__content} />
  </div>
);

export default TextArea;
