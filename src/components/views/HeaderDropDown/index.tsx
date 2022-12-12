import classNames from 'classnames';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from 'components';
import { ModalContext } from 'context/Modal';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

import { CreateEvent, NewPost, CreateTournament } from '../Modals';

import { THeaderDropDownProps } from './types';
import styles from './HeaderDropDown.module.scss';

const HeaderDropDown: FC<THeaderDropDownProps> = ({ dropDownList, className }) => {
  const { openModal } = useContext(ModalContext);
  const listItems = dropDownList.map((post) => {
    const handleClick = () => {
      if (post.description === 'Create Event') {
        openModal(<CreateEvent />);
      }
      if (post.description === 'Create Tournament') {
        openModal(<CreateTournament />);
      }

      if (post.description === 'New Post') {
        openModal(<NewPost />);
      }

      if (post.description === 'Logout') {
        BrowserStorageService.remove(BrowserStorageKeys.AccessToken);
        BrowserStorageService.remove(BrowserStorageKeys.AccessToken, { session: true });
      }
    };

    return (
      <Link
        key={post.id}
        to={post.path || '#'}
        onClick={handleClick}
        className={styles.container__content_item}
      >
        {post.icon}
        <Typography className={styles.container__content_item_title}>{post.description}</Typography>
      </Link>
    );
  });

  const dropDownClasses = classNames(styles.container, className);

  return (
    <div className={dropDownClasses}>
      <div className={styles.container__content}>{listItems}</div>
    </div>
  );
};

export default HeaderDropDown;
