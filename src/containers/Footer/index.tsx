import React from 'react';

import { ArrowIcon, GlobeIcon } from 'assets/icons';
import { LinkButton } from 'components';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_logo}>Reel Buds © Copyright 2022</div>
        <div className={styles.footer__content_links}>
          <div className={styles.link}>
            <GlobeIcon className={styles.link_globe} />
            <span>English</span>
            <ArrowIcon className={styles.link_arrow} />
          </div>
          <LinkButton className={styles.link} to='/help'>
            Help
          </LinkButton>
          <LinkButton className={styles.link} to='/about'>
            About
          </LinkButton>
          <LinkButton className={styles.link} to='/contacts'>
            Contacts
          </LinkButton>
        </div>
        <div className={styles.footer__content_privacy}>
          <LinkButton className={styles.footer__content_privacy_item} to='/privacypolice'>
            Privacy Police
          </LinkButton>
          <LinkButton className={styles.footer__content_privacy_item} to='/termsofuse'>
            Terms of Use
          </LinkButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
