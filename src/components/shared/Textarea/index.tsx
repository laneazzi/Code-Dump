import { FC } from 'react';

import Typography from '../Typography';

import styles from './TextArea.module.scss';
import { TTextareaProps } from './types';

const TextArea: FC<TTextareaProps> = ({ field }) => (
  <div className={styles.container}>
    <p className={styles.container__title}>Description</p>

    {field?.isBlur && field.isEmpty && (
      <Typography tagName='span' className={styles.container__error}>
        {field?.errorMessage}
      </Typography>
    )}

    <textarea
      value={field?.value}
      onBlur={field?.onBlur}
      placeholder='Write...'
      onChange={field?.onChange}
      className={styles.container__content}
    />
  </div>
);

export default TextArea;
