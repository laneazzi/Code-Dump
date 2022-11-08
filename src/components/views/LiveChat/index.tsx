import { FC } from 'react';
import classNames from 'classnames';

import { Typography } from 'components/shared';
import { TMessage } from 'types/global/messagesTypes';
import { ChatCloseIcon, OptionsIcon } from 'assets/icons';

import Message from '../Message';
import ChatField from '../ChatField';

import styles from './LiveChat.module.scss';

type TLiveChatProps = {
  type?: 'global';
  messages: TMessage[];
  closeTheChat?: () => void;
};

const LiveChat: FC<TLiveChatProps> = ({ messages, type, closeTheChat }) => {
  const chatItems = messages.map((message) => <Message key={message.id} user={message} inChat />);

  const liveChatClasses = classNames(styles.chat, { [styles.chat__small]: type === 'global' });

  const chatMainClasses = classNames(styles.chat__content_main, {
    [styles.chat__content_main_small]: type === 'global',
  });

  return (
    <div className={liveChatClasses}>
      <div className={styles.chat__content}>
        {type && (
          <ChatCloseIcon className={styles.chat__content_close} onClick={() => closeTheChat?.()} />
        )}
        <div className={styles.chat__content_head}>
          <Typography>Live Chat</Typography>
          <OptionsIcon />
        </div>
        <div className={chatMainClasses}>{chatItems}</div>
        <div className={styles.chat__content_footer}>
          <ChatField type={type} />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
