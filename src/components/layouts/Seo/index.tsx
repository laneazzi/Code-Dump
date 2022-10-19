import React, { ReactNode } from 'react';

import { Header, Navbar } from 'components';

import styles from './Seo.module.scss';

type TSeoProps = {
  children: ReactNode;
  withLayout: boolean;
};

const Seo: React.FC<TSeoProps> = ({ children, withLayout }) => {
  return (
    <>
      {withLayout ? (
        <div className={styles.layout}>
          <Navbar className={styles.layout__navbar} />
          <div className={styles.layout__header}>
            <Header />
          </div>

          <div className={styles.layout__main}>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Seo;
