import { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';

import { Routes } from 'types';
import { ReelBudLogoIcon } from 'assets/icons';
import { navBarLinks } from 'constants/navBar';

import styles from './Navbar.module.scss';

type TNavBarProps = {
  className: string;
};

const Navbar: FC<TNavBarProps> = ({ className }) => {
  const [idx, setIdx] = useState<number>(0);
  const [focused, setFocused] = useState<number | null>(null);
  const navRef = useRef<null | HTMLDivElement>(null);

  const navigate = useNavigate();

  const routeToHome = () => {
    navigate(Routes.Home);
  };

  const enteredItem = (idx: number) => {
    setFocused(idx);
  };

  const leaveFocus = () => {
    setFocused(null);
  };

  const scrollTo = (idx: number) => {
    setIdx(idx);
    let scrollPosition = 0;

    if (idx === 0) {
      scrollPosition = 0;
    } else {
      scrollPosition = 66 * idx + 25;
    }

    navRef.current?.scrollTo(scrollPosition, 0);
  };

  const linkItems = navBarLinks.map((link, idx) => {
    const focusedClasses = classNames(styles.navbar__links_box_title, {
      [styles.navbar__links_box_title_active]: idx === focused,
    });

    return (
      <div
        onClick={() => scrollTo(idx)}
        className={styles.navbar__links_box}
        key={link.id}
        onMouseLeave={leaveFocus}
        onMouseOver={() => enteredItem(idx)}
      >
        <NavLink
          to={link.url}
          className={({ isActive }) =>
            !isActive ? styles.navbar__links_item : styles.navbar__links_item_active
          }
        >
          {link.icon}
        </NavLink>

        <p className={focusedClasses}>{link.title}</p>
      </div>
    );
  });

  return (
    <div className={className}>
      <nav ref={navRef} className={styles.navbar} onMouseLeave={leaveFocus}>
        <div className={styles.navbar__logo}>
          <ReelBudLogoIcon onClick={routeToHome} className={styles.navbar__logo_icon} />
        </div>
        <div className={styles.navbar__links}>{linkItems}</div>
      </nav>
    </div>
  );
};

export default Navbar;
