import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ReelBudLogoIcon } from 'assets/icons';
import { navBarLinks } from 'constants/navBar';

import styles from './Navbar.module.scss';

type INavBarProps = {
  className?: string;
};

const Navbar: FC<INavBarProps> = ({ className }) => {
  const linkItems = navBarLinks.map((link) => (
    <NavLink
      key={link.id}
      to={link.url}
      className={({ isActive }) =>
        !isActive ? styles.navbar__links_item : styles.navbar__links_item_active
      }
    >
      {link.icon}
    </NavLink>
  ));

  return (
    <div className={className}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <ReelBudLogoIcon className={styles.navbar__logo_icon} />
        </div>
        <div className={styles.navbar__wrapper}>
          <div className={styles.navbar__links}>{linkItems}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
