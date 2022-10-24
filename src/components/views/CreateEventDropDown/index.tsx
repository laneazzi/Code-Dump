import classNames from 'classnames';
import { FC, useState } from 'react';

import { ArrowIcon } from 'assets/icons';
import { Option } from 'types/global/options';

import styles from './CreateEventDropDown.module.scss';

type TEventDropDwonProps = {
  title?: string;
  optionList?: Option[];
};

const EventDropDown: FC<TEventDropDwonProps> = ({ title, optionList }) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const showMenu = () => setIsDrop(!isDrop);

  const eventDropDownClasses = classNames(styles.container, {
    [styles.container_open]: isDrop,
  });

  const eventListClasses = classNames(styles.container__content_list, {
    [styles.container__content_list_active]: isDrop,
  });

  return (
    <div className={eventDropDownClasses}>
      <div className={styles.container__content} onClick={showMenu}>
        <div className={styles.container__content_title}>{title}</div>
        <div className={styles.container__content_main}>
          <span className={styles.container__content_main_head}>Select</span>
          <ArrowIcon className={styles.container__content_main_icon} />
        </div>
      </div>
      <div className={eventListClasses}>
        <div className={styles.container__content_list_inner}>
          <p className={styles.container__content_list_inner_item}>Example</p>
          <p className={styles.container__content_list_inner_item}>Example</p>
          <p className={styles.container__content_list_inner_item}>Example</p>
        </div>
      </div>
    </div>
  );
};

export default EventDropDown;
