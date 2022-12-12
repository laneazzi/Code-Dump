import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { dateBetween } from 'utils';
import { Typography, UserImgFrame } from 'components/shared';
import { MessageSettingsIcon, ShareIcon } from 'assets/icons';
import { useAppDispatch, useAppSelector, useOnClickOutside } from 'hooks';
import { editPostComment } from 'store/slices/activitiesSlice/activitiesThunks';

import styles from './Message.module.scss';
import { TMessageProps } from './types';

const Message: FC<TMessageProps> = ({
  comment,
  type,
  getId,
  inChat,
  postId,
  removeComment,
  parentName = 0,
}) => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state) => state.auth);

  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(comment?.content);

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
        id: comment?.id as number,
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

  const time = dateBetween(comment?.created_at as Date);

  const remove = () => {
    removeComment?.(comment?.id as number, postId as number);
  };

  const closeDropDown = () => setIsDrop(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(menuRef, closeDropDown);

  const dropDownClasses = classNames(styles.options__menu, {
    [styles.options__menu_active]: isDrop,
  });

  const showOptions = (id: number) => {
    if (userData?.id === id) {
      setIsDrop(!isDrop);
    }
  };

  const stopPropagation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const inChatMessages = classNames(
    styles.container,
    { [styles.container__chat]: inChat },
    { [styles.container__comments]: type === 'comment' },
  );

  const innerText =
    parentName === 0 ? (
      editValue
    ) : (
      <Typography tagName='span'>
        to
        <Typography tagName='span' className={styles.replied__user}>
          @{parentName}
        </Typography>
        <Typography tagName='span'>{editValue}</Typography>
      </Typography>
    );

  return (
    <div className={inChatMessages}>
      <div className={styles.container__content}>
        <div className={styles.container__content_user}>
          <UserImgFrame img={''} className={styles.container__content_user_img} />
        </div>
        <div className={styles.container__content_box}>
          <div className={styles.container__content_box_info}>
            <p className={styles.container__content_box_info_username}>Username</p>

            <p className={styles.container__content_box_info_commentary}>
              {type === 'comment' && isEditable ? (
                <input value={editValue} onChange={handelChange} className={styles.edit__field} />
              ) : (
                innerText
              )}
            </p>
          </div>
          {type === 'comment' && (
            <div className={styles.container__content_box_icons}>
              <div
                className={styles.container__content_box_icons_reply}
                onClick={() => getId && getId(comment?.id)}
              >
                <ShareIcon />
                Reply
              </div>
              <div className={styles.container__content_box_icons_time}>{time}</div>
              <div
                className={styles.options}
                onClick={() => showOptions(comment?.user_id as number)}
                ref={menuRef}
              >
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
