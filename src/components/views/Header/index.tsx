import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import {
  AddIcon,
  HeaderArrowIcon,
  InputSearchIcon,
  ReelBudTextIcon,
  NotificationsIcon,
} from 'assets/icons';
import { UserImg } from 'assets/img';
import { useOnClickOutside } from 'hooks';
import { Input, Typography, UserImgFrame } from 'components/shared';
import { EventDropDownItems, ProfileDropDownItems } from 'utils/headerDropDowns';

import { HeaderDropDown } from '../index';

import styles from './Header.module.scss';

const Header = () => {
  const [isEventActive, setIsEventActive] = useState(false);
  const [isUserActive, setIsUserActive] = useState(false);

  const eventRef = useRef<null>(null);

  const userRef = useRef<null>(null);

  const closeEventDropDown = () => setIsEventActive(false);

  const closeUserDropDown = () => setIsUserActive(false);

  useOnClickOutside(eventRef, closeEventDropDown);

  useOnClickOutside(userRef, closeUserDropDown);

  const eventDropDownClasses = classNames(styles.header__events, {
    [styles.header__events_active]: isEventActive,
  });

  const userDropDownClasses = classNames(styles.header__user_dropdown, {
    [styles.header__user_dropdown_active]: isUserActive,
  });

  const headerArrowClasses = classNames(styles.header__user_frame_arrow, {
    [styles.header__user_frame_arrow_rotate]: isUserActive,
  });

  const toggleEventsDropDown = () => setIsEventActive(!isEventActive);

  const toggleUserDropDown = () => setIsUserActive(!isUserActive);

  const { pathname } = useLocation();

  const param = pathname.replace('/', '');

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <ReelBudTextIcon className={styles.header__title_logo} />
        <Typography tagName='span' className={styles.header__title_route}>
          /
        </Typography>
        <Typography tagName='span' className={styles.header__title_route}>
          {param}
        </Typography>
      </div>

      <Input
        anyIcon
        type='text'
        placeholder='Search...'
        RightIcon={InputSearchIcon}
        innerClassName={styles.header__field}
        className={styles.header__field_block}
      />

      <div className={styles.header__user}>
        <AddIcon
          className={styles.header__user_add}
          onClick={toggleEventsDropDown}
          ref={eventRef}
        />
        <NotificationsIcon className={styles.header__user_ring} />
        <div className={styles.header__user_frame} onClick={toggleUserDropDown} ref={userRef}>
          <HeaderArrowIcon className={headerArrowClasses} />
          <UserImgFrame img={UserImg} className={styles.header__user_frame_border} />
        </div>
      </div>
      <HeaderDropDown dropDownList={EventDropDownItems} className={eventDropDownClasses} />
      <HeaderDropDown dropDownList={ProfileDropDownItems} className={userDropDownClasses} />
    </header>
  );
};

export default Header;
