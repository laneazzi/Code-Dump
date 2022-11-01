import { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from 'hooks';
import { BlueArrowIcon } from 'assets/icons';
import { TOption } from 'types/global/options';
import { Typography } from 'components/shared';

import styles from './CreateEventDropDown.module.scss';

type TEventDropDownProps = {
  title: string;
  size?: 'large' | 'small';
  optionList?: TOption[];
};

const EventDropDown: FC<TEventDropDownProps> = ({ title, optionList, size }) => {
  const [activeTitle, setActiveTitle] = useState<string>('Select');

  const [isDrop, setIsDrop] = useState<boolean>(false);

  const showMenu = () => setIsDrop(!isDrop);

  const getActiveTitle = (value: string) => {
    setActiveTitle(value);
    setIsDrop(false);
  };

  const closeDropDown = () => setIsDrop(false);

  const dropDownRed = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(dropDownRed, closeDropDown);

  const eventDropDownClasses = classNames(styles.container, {
    [styles.container_open]: isDrop,
    [styles.container__large]: size === 'large',
    [styles.container__small]: size === 'small',
  });

  const eventListClasses = classNames(styles.container__content_list, {
    [styles.container__content_list_active]: isDrop,
    [styles.container__content_list_active_small]: size === 'small',
  });

  const options = optionList?.map((option) => (
    <Typography
      key={option.id}
      className={styles.container__content_list_inner_item}
      onClick={() => getActiveTitle(option.value)}
    >
      {option.value}
    </Typography>
  ));

  return (
    <div className={eventDropDownClasses} onClick={showMenu} ref={dropDownRed}>
      <div className={styles.container__content}>
        <div className={styles.container__content_title}>{title}</div>
        <div className={styles.container__content_main}>
          <span className={styles.container__content_main_head}>{activeTitle}</span>
          <BlueArrowIcon className={styles.container__content_main_icon} />
        </div>
      </div>
      <div className={eventListClasses}>
        <div className={styles.container__content_list_inner}>{options}</div>
      </div>
    </div>
  );
};

export default EventDropDown;
