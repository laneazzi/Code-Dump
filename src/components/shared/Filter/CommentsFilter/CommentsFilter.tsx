import { FC, useState } from 'react';
import classNames from 'classnames';

import { ArrowIcon } from 'assets/icons';

import styles from './CommentsFilter.module.scss';

type TCommentsFilterProps = {
  commentsCount: number;
};

const CommentsFilter: FC<TCommentsFilterProps> = ({ commentsCount }) => {
  const [menu, setMenu] = useState<boolean>(false);

  const openSortMenu = () => setMenu(!menu);

  const menuClasses = classNames(styles.container__sort_menu, {
    [styles.container__sort_menu_open]: menu,
  });

  const arrowClasses = classNames(styles.container__sort_title_arrow, {
    [styles.container__sort_title_arrow_active]: menu,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__count}>({commentsCount}) Comments</div>
      <div className={styles.container__sort}>
        <p className={styles.container__sort_title} onClick={openSortMenu}>
          Sort By: Most voted <ArrowIcon className={arrowClasses} />
        </p>
        <div className={menuClasses}>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
          <p>Example</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsFilter;
