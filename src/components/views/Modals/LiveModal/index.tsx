import React, { FC } from 'react';

import { GuyImg } from 'assets/img';
import LiveUser from 'components/views/LiveUser';
import LiveChat from 'components/views/LiveChat';
import { LiveChatVideoCard } from 'components/shared';
import { liveChatMessages } from 'utils/liveChatMessages';

import styles from './LiveModal.module.scss';

type TLiveModalProps = {
  src: string;
};

const LiveModal: FC<TLiveModalProps> = ({ src }) => (
  <div className={styles.container}>
    <div className={styles.container__live}>
      <LiveChatVideoCard video={src} />
      <LiveUser
        count={123}
        img={GuyImg}
        username='Username'
        videoDescription='Description simply dummy text of the printing 🐟 🐠'
      />
    </div>
    <div className={styles.container__chat}>
      <LiveChat messages={liveChatMessages} />
    </div>
  </div>
);

export default LiveModal;
