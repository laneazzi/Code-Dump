import { useContext, useState } from 'react';

import { ModalContext } from 'context/Modal';
import { useAppDispatch, useAppSelector } from 'hooks';
import { NewPostTextArea, NewPostFile } from 'components';
import { createActivityPost } from 'store/slices/activitiesSlice/activitiesThunks';

import styles from './NewPost.module.scss';

const NewPost = () => {
  const { closeModal } = useContext(ModalContext);
  const [description, setDescription] = useState<string>('');

  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.auth);

  const createPost = () => {
    const post = {
      user_id: userData?.id as number,
      description: description,
      content_url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      content_type: 'string',
    };

    closeModal();

    dispatch(createActivityPost(post));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content_head}>NEW POST</div>
        <div className={styles.container__content_main}>
          <div className={styles.container__content_main_right}>
            <div className={styles.container__content_main_right_elem}>
              <NewPostTextArea value={description} setValue={setDescription} />
            </div>
            <div className={styles.container__content_main_right_elem}>
              <NewPostFile />
            </div>
          </div>
        </div>
        <div className={styles.container__content_footer}>
          <button onClick={closeModal}>Close</button>
          <button onClick={createPost}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
