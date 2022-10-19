import React from 'react';

import { ArrowIcon, GlobeIcon } from 'assets/icons';
import { LinkButton } from 'components';
import { Routes } from 'types';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__content}>
      <div className={styles.footer__content_logo}>Reel Buds © Copyright 2022</div>
      <div className={styles.footer__content_links}>
        <div className={styles.link}>
          <GlobeIcon className={styles.link_globe} />
          <span>English</span>
          <ArrowIcon className={styles.link_arrow} />
        </div>
        <LinkButton className={styles.link} to={Routes.Help}>
          Help
        </LinkButton>
        <LinkButton className={styles.link} to={Routes.About}>
          About
        </LinkButton>
        <LinkButton className={styles.link} to={Routes.Contacts}>
          Contacts
        </LinkButton>
      </div>
      <div className={styles.footer__content_privacy}>
        <LinkButton className={styles.footer__content_privacy_item} to={Routes.PrivacyPolicy}>
          Privacy Policy
        </LinkButton>
        <LinkButton className={styles.footer__content_privacy_item} to={Routes.TermsOfUse}>
          Terms of Use
        </LinkButton>
      </div>
    </div>
  </footer>
);

export default Footer;
