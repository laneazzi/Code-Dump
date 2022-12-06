import { FC } from 'react';

import { TNewPostTextAreaProps } from './types';
import styles from './NewPostTextArea.module.scss';

const NewPostTextArea: FC<TNewPostTextAreaProps> = ({ value, setValue }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Description</p>
      <textarea
        value={value}
        placeholder='Write...'
        onChange={changeHandler}
        className={styles.container__content}
      />
    </div>
  );
};

export default NewPostTextArea;
