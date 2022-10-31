import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Header, Navbar } from 'components';

import styles from './Seo.module.scss';

type TSeoProps = {
  children: ReactNode;
  withLayout: boolean;
};

const Seo: React.FC<TSeoProps> = ({ children, withLayout }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
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
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Seo;
