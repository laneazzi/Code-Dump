import { FC, useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ModalContext } from 'context/Modal';
import { Typography } from 'components/shared';
import { THeaderDropDown } from 'utils/headerDropDowns';

import { CreateEvent, NewPost, CreateTournament } from '../Modals';

import styles from './HeaderDropDown.module.scss';

type THeaderDropDownProps = {
  className?: string;
  dropDownList: THeaderDropDown[];
};

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
