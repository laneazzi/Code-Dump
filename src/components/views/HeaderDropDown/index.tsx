import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { THeaderDropDown } from 'utils/headerDropDowns';

import styles from './HeaderDropDown.module.scss';

type THeaderDropDownProps = {
  dropDownList: THeaderDropDown[];
  className?: string;
};

const HeaderDropDown: FC<THeaderDropDownProps> = ({ dropDownList, className }) => {
  const listItems = dropDownList.map((post) => (
    <div key={post.id} className={styles.container__content_item}>
      {post.icon}
      <Link to={post.path ? post.path : '#'} className={styles.container__content_item_title}>
        {post.description}
      </Link>
    </div>
  ));

  const dropDownClasses = classNames(styles.container, className);

  return (
    <div className={dropDownClasses}>
      <div className={styles.container__content}>{listItems}</div>
    </div>
  );
};

export default HeaderDropDown;
