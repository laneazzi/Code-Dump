import { useContext } from 'react';
import { ModalContext } from 'context/Modal';
import { NewPostTextArea, NewPostFile } from 'components';

import styles from './NewPost.module.scss';

const NewPost = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_head}>NEW POST</div>
        <div className={styles.container__content_main}>
          <div className={styles.container__content_main_right}>
            <div className={styles.container__content_main_right_elem}>
              <NewPostTextArea />
            </div>
            <div className={styles.container__content_main_right_elem}>
              <NewPostFile />
            </div>
          </div>
        </div>
        <div className={styles.container__content_footer}>
          <button onClick={closeModal}>Close</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
