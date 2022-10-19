import { useLocation } from 'react-router-dom';

import {
  AddIcon,
  HeaderArrowIcon,
  InputSearchIcon,
  ReelBudTextIcon,
  NotificationsIcon,
} from 'assets/icons';
import { Input, Typography, UserImgFrame } from 'components/shared';
import { UserImg } from 'assets/img';

import styles from './Header.module.scss';

const Header = () => {
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
        type='text'
        placeholder='Search...'
        anyIcon
        RightIcon={InputSearchIcon}
        innerClassName={styles.header__field}
        className={styles.header__field_block}
      />

      <div className={styles.header__user}>
        <AddIcon className={styles.header__user_add} />
        <NotificationsIcon className={styles.header__user_ring} />
        <div className={styles.header__user_frame}>
          <HeaderArrowIcon className={styles.header__user_frame_arrow} />
          <UserImgFrame img={UserImg} className={styles.header__user_frame_border} />
        </div>
      </div>
    </header>
  );
};

export default Header;
