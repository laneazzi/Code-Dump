import { FC } from 'react';

import styles from './TextArea.module.scss';
import { TTextareaProps } from './types';

const TextArea: FC<TTextareaProps> = ({ name, onChange }) => (
  <div className={styles.container}>
    <p className={styles.container__title}>Description</p>
    <textarea
      name={name}
      onChange={onChange}
      placeholder='Write...'
      className={styles.container__content}
    />
  </div>
);

export default TextArea;
