import React, { FC, useState } from 'react';
import classNames from 'classnames';
import EmojiPicker from 'emoji-picker-react';

import { Input } from 'components/shared';
import { SendIcon, SmileIcon } from 'assets/icons';

import styles from './ChatField.module.scss';

type TChatFieldProps = {
  type?: 'global';
};

const ChatField: FC<TChatFieldProps> = ({ type }) => {
  const [message, setMessage] = useState<string>('');
  const [isShowPicker, setIsShowPicker] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const emojiCaseClasses = classNames(styles.container__emoji, {
    [styles.container__emoji_small]: type === 'global',
  });

  const onEmojiClick = (emojiObject: any) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
  };

  const showEmojis = () => setIsShowPicker(!isShowPicker);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Input
          type='text'
          placeholder='Type a message...'
          value={message}
          onChange={handleChange}
        />

        <SmileIcon onClick={showEmojis} className={styles.container__content_smile} />
      </div>

      {isShowPicker && (
        <div className={emojiCaseClasses}>
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            width={type ? 365 : 300}
            height={type ? 300 : 400}
            searchDisabled={type && true}
            skinTonesDisabled={type && true}
          />
        </div>
      )}

      <div className={styles.container__icon}>
        <SendIcon className={styles.container__icon_item} />
      </div>
    </div>
  );
};

export default ChatField;
