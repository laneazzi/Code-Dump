import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { Typography, UserImgFrame } from 'components/shared';
import { MessageSettingsIcon, ShareIcon } from 'assets/icons';
import { useAppDispatch, useAppSelector, useOnClickOutside } from 'hooks';
import { editPostComment } from 'store/slices/activitiesSlice/activitiesThunks';

import styles from './Message.module.scss';

type TMessageProps = {
  user: any;
  postId?: number;
  inChat?: boolean;
  type?: 'comment';
  commentId?: number;
  removeComment?: (commentId: number, postId: number) => void;
};

const Message: FC<TMessageProps> = ({ user, type, inChat, commentId, postId, removeComment }) => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.auth);

  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(user?.content);

  const editComment = () => setIsEditable(!isEditable);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const submitEdits = () => {
    if (editValue.trim()) {
      setIsEditable(false);
      setIsDrop(false);

      const editedComment = {
        content: editValue,
        reaction_icon: 'string',
        id: commentId as number,
        user_id: userData?.id as number,
      };

      dispatch(
        editPostComment({
          activity_post_comment_id: editedComment as any,
          postId: postId as number,
        }),
      );
    }
  };

  const remove = () => {
    removeComment?.(commentId as number, postId as number);
  };

  const closeDropDown = () => setIsDrop(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, closeDropDown);

  const dropDownClasses = classNames(styles.options__menu, {
    [styles.options__menu_active]: isDrop,
  });

  const showOptions = () => setIsDrop(!isDrop);

  const stopPropagation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const inChatMessages = classNames(
    styles.container,
    { [styles.container__chat]: inChat },
    { [styles.container__comments]: type === 'comment' },
  );

  return (
    <div className={inChatMessages}>
      <div className={styles.container__content}>
        <div className={styles.container__content_user}>
          <UserImgFrame img={user?.userImg} className={styles.container__content_user_img} />
        </div>
        <div className={styles.container__content_box}>
          <div className={styles.container__content_box_info}>
            <p className={styles.container__content_box_info_username}>{user?.userName}</p>

            <p className={styles.container__content_box_info_commentary}>
              {type === 'comment' && isEditable ? (
                <input value={editValue} onChange={handelChange} className={styles.edit__field} />
              ) : (
                editValue
              )}
            </p>
          </div>
          {type === 'comment' && (
            <div className={styles.container__content_box_icons}>
              <div className={styles.container__content_box_icons_reply}>
                <ShareIcon />
                Reply
              </div>
              <div className={styles.container__content_box_icons_time}>1 minutes ago</div>
              <div className={styles.options} onClick={showOptions} ref={menuRef}>
                <MessageSettingsIcon />
                <div className={dropDownClasses} onClick={stopPropagation}>
                  {isEditable ? (
                    <Typography className={styles.options__menu__item} onClick={submitEdits}>
                      Submit edits
                    </Typography>
                  ) : (
                    <>
                      <Typography className={styles.options__menu__item} onClick={editComment}>
                        Edit
                      </Typography>
                      <Typography className={styles.options__menu__item} onClick={remove}>
                        Delete
                      </Typography>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;
