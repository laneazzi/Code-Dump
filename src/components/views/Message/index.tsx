import { FC } from 'react';

import { UserImgFrame } from 'components/shared';
import { MessageSettingsIcon, ShareDownIcon, ShareIcon, ShareUpIcon } from 'assets/icons';

import styles from './Message.module.scss';

type TMessageProps = {
  img: string;
  type?: string;
  username: string;
  commentary: string;
  shareCount: number;
  publishedTime: string;
};

const Message: FC<TMessageProps> = ({
  img,
  type,
  username,
  commentary,
  shareCount,
  publishedTime,
}) => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div className={styles.container__content_user}>
        <UserImgFrame img={img} className={styles.container__content_user_img} />
      </div>
      <div className={styles.container__content_box}>
        <div className={styles.container__content_box_info}>
          <p className={styles.container__content_box_info_username}>{username}</p>
          <p className={styles.container__content_box_info_commentary}>{commentary}</p>
        </div>
        {type === 'comment' && (
          <div className={styles.container__content_box_icons}>
            <div className={styles.container__content_box_icons_replies}>
              <ShareUpIcon />
              {shareCount}
              <ShareDownIcon />
            </div>
            <div className={styles.container__content_box_icons_reply}>
              <ShareIcon />
              Reply
            </div>
            <div>{publishedTime}</div>
            <div>
              <MessageSettingsIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
export default Message;
