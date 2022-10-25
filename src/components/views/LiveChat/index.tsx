import { FC } from 'react';

import { OptionsIcon } from 'assets/icons';
import { Typography } from 'components/shared';
import { TMessage } from 'types/global/messagesTypes';

import Message from '../Message';
import ChatField from '../ChatField';

import styles from './LiveChat.module.scss';

type TLiveChatProps = {
  messages: TMessage[];
};

const LiveChat: FC<TLiveChatProps> = ({ messages }) => {
  const chatItems = messages.map((message) => (
    <Message
      key={message.id}
      img={message.userImg}
      username={message.userName}
      commentary={message.message}
    />
  ));

  return (
    <div className={styles.chat}>
      <div className={styles.chat__content}>
        <div className={styles.chat__content_head}>
          <Typography>Live Chat</Typography>
          <OptionsIcon />
        </div>
        <div className={styles.chat__content_main}>{chatItems}</div>
        <div className={styles.chat__content_footer}>
          <ChatField />
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
