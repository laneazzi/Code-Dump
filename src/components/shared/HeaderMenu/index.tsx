import { useRef } from 'react';

import { UserImg } from 'assets/img';

import UserImgFrame from '../UserImgFrame';

import { menuLinks } from './links';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  const menuRef = useRef(null);

  const renderMenuLinks = menuLinks.map((menuLink) => (
    <div role='button' key={menuLink.id} className={menuLink.className}>
      {menuLink.imageSrc}
    </div>
  ));

  return (
    <div className='menu' ref={menuRef}>
      <input id='menu-open' type='checkbox' name='menu-open' className='menu-open' />
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
