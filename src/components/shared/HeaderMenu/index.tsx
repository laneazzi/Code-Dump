import { FC, useEffect, useRef, useState } from 'react';

import { UserImg } from 'assets/img';
import { useOnClickOutside } from 'hooks';

import UserImgFrame from '../UserImgFrame';

import { MenuLinkNames, menuLinks } from './links';

import './HeaderMenu.scss';

type THeaderMenu = {
  user: () => void;
  create: () => void;
  search: () => void;
};

const HeaderMenu: FC<THeaderMenu> = ({ user, create, search }) => {
  const [checked, setChecked] = useState(false);
  const checkedRef = useRef<HTMLInputElement | null>(null);

  const checkedMenu = () => {
    setChecked(!checked);
  };

  const closeMenu = () => {
    setChecked(false);
  };

  useOnClickOutside(checkedRef, closeMenu);

  useEffect(() => {
    setChecked(false);
  }, [create, user, search]);

  const renderMenuLinks = menuLinks.map((menuLink) => {
    const toggleDependsName = () => {
      switch (menuLink.name) {
        case menuLink.name && MenuLinkNames.CREATE:
          return create();

        case menuLink.name && MenuLinkNames.SEARCH:
          return search();

        case menuLink.name && MenuLinkNames.USER:
          return user();

        default:
          return checkedMenu();
      }
    };

    return (
      <div
        role='button'
        key={menuLink.id}
        onClick={toggleDependsName}
        className={menuLink.className}
      >
        {menuLink.imageSrc}
      </div>
    );
  });

  return (
    <div className='menu' ref={checkedRef}>
      <input
        id='menu-open'
        type='checkbox'
        name='menu-open'
        checked={checked}
        className='menu-open'
        onChange={checkedMenu}
      />
      <label className='menu-open-button' htmlFor='menu-open'>
        <UserImgFrame img={UserImg} className='menu-bg' />
      </label>
      <a className='menu-item d_none' />
      <a className='menu-item d_none' />
      {renderMenuLinks}
    </div>
  );
};

export default HeaderMenu;
