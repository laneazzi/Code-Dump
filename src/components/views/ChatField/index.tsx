import React, { useState } from 'react';

import { Input } from 'components/shared';
import { SendIcon, SmileIcon } from 'assets/icons';

import styles from './ChatField.module.scss';

const ChatField = () => {
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Input
          type='text'
          placeholder='Type a message...'
          value={message}
          onChange={handleChange}
        />
        <SmileIcon />
      </div>

      <div className={styles.container__icon}>
        <SendIcon className={styles.container__icon_item} />
      </div>
    </div>
  );
};

export default ChatField;
