import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ScrollIcon } from 'assets/icons';
import { Header, Navbar } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useScrollPosition } from 'hooks';
import { getCurrentUser } from 'store/slices/authSlice/authThunks';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

import styles from './Seo.module.scss';

type TSeoProps = {
  children: ReactNode;
  withLayout: boolean;
};

const Seo: React.FC<TSeoProps> = ({ children, withLayout }) => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const accessToken = JSON.parse(
    BrowserStorageService.get(BrowserStorageKeys.AccessToken) ||
      (BrowserStorageService.get(BrowserStorageKeys.AccessToken, { session: true }) as any),
  );

  useEffect(() => {
    if (accessToken) {
      dispatch(getCurrentUser(accessToken || accessToken.access_token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <>
          <ToastContainer />
          {children}
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default Seo;
