import { FC } from 'react';
import classNames from 'classnames';

import { UserImgFrame } from 'components/shared';
import { TMessage } from 'types/global/messagesTypes';
import { MessageSettingsIcon, ShareDownIcon, ShareIcon, ShareUpIcon } from 'assets/icons';

import styles from './Message.module.scss';

type TMessageProps = {
  user: TMessage;
  type?: 'comment';
  inChat?: boolean;
};

const Message: FC<TMessageProps> = ({ user, type, inChat }) => {
  const inChatMessages = classNames(
    styles.container,
    { [styles.container__chat]: inChat },
    { [styles.container__comments]: type === 'comment' },
  );

  return (
    <div className={inChatMessages}>
      <div className={styles.container__content}>
        <div className={styles.container__content_user}>
          <UserImgFrame img={user.userImg} className={styles.container__content_user_img} />
        </div>
        <div className={styles.container__content_box}>
          <div className={styles.container__content_box_info}>
            <p className={styles.container__content_box_info_username}>{user.userName}</p>
            <p className={styles.container__content_box_info_commentary}>{user.message}</p>
          </div>
          {type === 'comment' && (
            <div className={styles.container__content_box_icons}>
              <div className={styles.container__content_box_icons_replies}>
                <ShareUpIcon />
                {user.shareCount}
                <ShareDownIcon />
              </div>
              <div className={styles.container__content_box_icons_reply}>
                <ShareIcon />
                Reply
              </div>
              <div>{user.publishedTime}</div>
              <div>
                <MessageSettingsIcon />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;
