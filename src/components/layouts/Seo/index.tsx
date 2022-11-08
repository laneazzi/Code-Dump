import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Header, Navbar } from 'components';
import { ScrollIcon } from 'assets/icons';
import { useScrollPosition } from 'hooks';

import styles from './Seo.module.scss';

type TSeoProps = {
  children: ReactNode;
  withLayout: boolean;
};

const Seo: React.FC<TSeoProps> = ({ children, withLayout }) => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const position = useScrollPosition();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <>
      {withLayout ? (
        <div className={styles.layout}>
          <Navbar className={styles.layout__navbar} />
          <div className={styles.layout__wrapper}>
            <div className={styles.layout__header}>
              <Header />
            </div>
            <div className={styles.layout__main}>{children}</div>
          </div>
          {position >= 50 && (
            <div className={styles.layout__scroll} onClick={scrollToTop}>
              <ScrollIcon />
            </div>
          )}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Seo;
