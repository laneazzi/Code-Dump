import React, { FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import { SendIcon, SmileIcon } from 'assets/icons';
import { Input, Typography } from 'components/shared';
import { useAppSelector, useWindowSize } from 'hooks';
import { TNewPostComment } from 'store/slices/activitiesSlice/types';

import { IEmoji, TChatFieldProps } from './types';
import styles from './ChatField.module.scss';

const ChatField: FC<TChatFieldProps> = ({
  type,
  postId,
  repliedId,
  addComment,
  setIsReply,
  replyComment,
  isReply = false,
}) => {
  const { userData } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isReply) {
      fieldRef.current?.focus();
    }
  }, [isReply]);

  const fieldRef = useRef<HTMLInputElement | null>(null);
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

    if (message.trim()) {
      addComment?.(comment);
      setMessage('');
    }
  };

  const reply = () => {
    const comment: TNewPostComment = {
      content: message,
      on_main_post: false,
      user_id: userData?.id,
      reaction_icon: 'string',
      parent_comment_id: repliedId,
      user_activity_post_id: postId as number,
    };

    if (message.trim()) {
      replyComment?.(comment);
      setMessage('');
      setIsReply && setIsReply(false);
    }
  };

  const handleClick = () => {
    if (isReply) {
      reply();
    } else {
      createComment();
    }
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
      {isReply && (
        <Typography className={styles.container__reply}>Replying to {repliedId}</Typography>
      )}
      <div className={styles.container__content}>
        <Input
          type='text'
          ref={fieldRef}
          value={message}
          onChange={handleChange}
          placeholder='Type a message...'
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
        <SendIcon className={styles.container__icon_item} onClick={handleClick} />
      </div>
    </div>
  );
};

export default ChatField;
