import { FC, useState } from 'react';
import classNames from 'classnames';

import { Typography } from 'components';
import { BlueArrowIcon, MessageIcon } from 'assets/icons';

import styles from './CommentsFilter.module.scss';

type TCommentsFilterProps = {
  commentsCount: number;
};

const sortItems = [
  { id: 1, title: 'Most Views' },
  { id: 2, title: 'Most Replies' },
  { id: 3, title: 'Most Dislikes' },
];

const CommentsFilter: FC<TCommentsFilterProps> = ({ commentsCount }) => {
  const [title, setTitle] = useState<string>(sortItems[0].title);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const openSortMenu = () => setIsExpanded(!isExpanded);

  const handleClick = (value: string) => setTitle(value);

  const sortOptions = sortItems.map((item) => (
    <Typography
      key={item.id}
      className={styles.container__sort_menu_item}
      onClick={() => handleClick(item.title)}
    >
      {item.title}
    </Typography>
  ));

  const titleClasses = classNames(styles.container__sort, {
    [styles.container__sort_active]: isExpanded,
  });

  const menuClasses = classNames(styles.container__sort_menu, {
    [styles.container__sort_menu_open]: isExpanded,
  });

  const arrowClasses = classNames(styles.container__sort_title_arrow, {
    [styles.container__sort_title_arrow_active]: isExpanded,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__count}>
        ({commentsCount}) <Typography tagName='span'>Comments</Typography>
        <MessageIcon className={styles.container__count_icon} />
      </div>
      <div className={titleClasses}>
        <p className={styles.container__sort_title} onClick={openSortMenu}>
          Sort By: {title} <BlueArrowIcon className={arrowClasses} />
        </p>
        <div className={menuClasses}>{sortOptions}</div>
      </div>
    </div>
  );
};

export default CommentsFilter;
