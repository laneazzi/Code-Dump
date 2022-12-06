import React, { FC, useState } from 'react';
import classNames from 'classnames';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import { Input } from 'components/shared';
import { SendIcon, SmileIcon } from 'assets/icons';
import { useAppSelector, useWindowSize } from 'hooks';
import { TNewPostComment } from 'store/slices/activitiesSlice/types';

import { IEmoji } from './types';
import styles from './ChatField.module.scss';

type TChatFieldProps = {
  postId?: number;
  type?: 'global' | 'inLive';
  addComment?: (comment: TNewPostComment) => void;
};

const ChatField: FC<TChatFieldProps> = ({ type, postId, addComment }) => {
  const { userData } = useAppSelector((state) => state.auth);

  const [message, setMessage] = useState<string>('');
  const [isShowPicker, setIsShowPicker] = useState<boolean>(false);

  const createComment = () => {
    const comment: TNewPostComment = {
      content: message,
      on_main_post: true,
      parent_comment_id: 0,
      user_id: userData?.id,
      reaction_icon: 'string',
      user_activity_post_id: postId as number,
    };

    addComment?.(comment);
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const width = useWindowSize().width;

  const emojiCaseClasses = classNames(styles.container__emoji, {
    [styles.container__emoji_active]: isShowPicker,
    [styles.container__emoji_small]: type === 'global',
    [styles.container__emoji_small_active]: isShowPicker && type === 'global',
  });

  const containerClasses = classNames(styles.container, {
    [styles.container__global]: type === 'global',
  });

  const onEmojiClick = (emojiObject: IEmoji) => {
    setMessage((prev) => prev + emojiObject.native);
  };

  const showEmojis = () => setIsShowPicker(!isShowPicker);

  return (
    <div className={containerClasses}>
      <div className={styles.container__content}>
        <Input
          type='text'
          placeholder='Type a message...'
          value={message}
          onChange={handleChange}
        />

        <SmileIcon onClick={showEmojis} className={styles.container__content_smile} />
      </div>

      <div className={emojiCaseClasses}>
        <Picker
          data={data}
          theme='light'
          set='native'
          maxFrequentRows={1}
          showPreview={false}
          showSkinTones={false}
          previewPosition='none'
          onEmojiSelect={onEmojiClick}
          perLine={width >= 768 ? 8 : 5}
        />
      </div>

      <div className={styles.container__icon}>
        <SendIcon className={styles.container__icon_item} onClick={createComment} />
      </div>
    </div>
  );
};

export default ChatField;
