import { FC } from 'react';

import { THeaderDropDown } from 'utils/headerDropDowns';

import styles from './EventDropDown.module.scss';

type TCreateDropDown = {
  dropDownList: THeaderDropDown[];
};

const EventDropDown: FC<TCreateDropDown> = ({ dropDownList }) => {
  const listItems = dropDownList.map((post) => (
    <div key={post.id} className={styles.container__content_item}>
      {post.icon}
      <span className={styles.container__content_item_title}>{post.description}</span>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>{listItems}</div>
    </div>
  );
};

export default EventDropDown;
