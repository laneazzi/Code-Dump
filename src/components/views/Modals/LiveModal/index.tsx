import { FC } from 'react';

import { GuyImg } from 'assets/img';
import { liveChatMessages } from 'utils';
import { LiveChatVideoCard, LiveChat, LiveUser } from 'components';

import { TLiveModalProps } from './types';
import styles from './LiveModal.module.scss';

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
