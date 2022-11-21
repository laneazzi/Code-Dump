import styles from './NewPostTextArea.module.scss';

const NewPostTextArea = () => (
  <div className={styles.container}>
    <p className={styles.container__title}>Description</p>
    <textarea placeholder='Write...' className={styles.container__content} />
  </div>
);

export default NewPostTextArea;
