import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  AddIcon,
  HeaderArrowIcon,
  ReelBudTextIcon,
  ReelBudLogoIcon,
  NotificationsIcon,
} from 'assets/icons';
import { Routes } from 'types';
import { emptyUserImg } from 'assets/img';
import { useAppSelector, useOnClickOutside } from 'hooks';
import { EventDropDownItems, ProfileDropDownItems } from 'utils/headerDropDowns';
import { HeaderMenu, SearchField, Typography, UserImgFrame } from 'components/shared';

import { HeaderDropDown } from '../index';

import styles from './Header.module.scss';

const Header = () => {
  const { userData } = useAppSelector((state) => state.auth);
  const [isUserActive, setIsUserActive] = useState(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [isEventActive, setIsEventActive] = useState(false);

  const eventRef = useRef<null>(null);

  const userRef = useRef<null>(null);

  const openSearch = () => {
    setIsSearch(!isSearch);
  };

  const closeEventDropDown = () => setIsEventActive(false);

  const closeUserDropDown = () => setIsUserActive(false);

  useOnClickOutside(userRef, closeUserDropDown);

  useOnClickOutside(eventRef, closeEventDropDown);

  const eventDropDownClasses = classNames(styles.header__events, {
    [styles.header__events_active]: isEventActive,
  });

  const userDropDownClasses = classNames(styles.header__user_dropdown, {
    [styles.header__user_dropdown_active]: isUserActive,
  });

  const headerArrowClasses = classNames(styles.header__user_frame_arrow, {
    [styles.header__user_frame_arrow_rotate]: isUserActive,
  });

  const toggleEventsDropDown = () => {
    setIsEventActive(!isEventActive);
  };

  const toggleUserDropDown = () => setIsUserActive(!isUserActive);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const goToHomePage = () => navigate(Routes.Home);

  const param = pathname.replace('/', '').replace('-', ' ');

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <ReelBudLogoIcon className={styles.header__title_icon} onClick={goToHomePage} />
        <ReelBudTextIcon className={styles.header__title_logo} />
        <Typography tagName='span' className={styles.header__title_route}>
          /
        </Typography>
        <Typography tagName='span' className={styles.header__title_route}>
          {param}
        </Typography>
      </div>

      <SearchField isSearch={isSearch} />

      <div className={styles.menu__absolute}>
        <HeaderMenu create={toggleEventsDropDown} user={toggleUserDropDown} search={openSearch} />
      </div>

      <div className={styles.header__user}>
        <div ref={eventRef} onClick={toggleEventsDropDown}>
          <AddIcon className={styles.header__user_add} />
          <HeaderDropDown dropDownList={EventDropDownItems} className={eventDropDownClasses} />
        </div>

        <NotificationsIcon className={styles.header__user_ring} />
        <div className={styles.header__user_frame} onClick={toggleUserDropDown} ref={userRef}>
          <HeaderArrowIcon className={headerArrowClasses} />
          <UserImgFrame
            img={userData?.profile?.image || emptyUserImg}
            className={styles.header__user_frame_border}
          />
          <HeaderDropDown dropDownList={ProfileDropDownItems} className={userDropDownClasses} />
        </div>
      </div>
    </header>
  );
};

export default Header;
