import { Navigate } from 'react-router-dom';

import { Routes } from 'types';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

const PublicRoute = ({ children }: any) => {
  const token =
    BrowserStorageService.get(BrowserStorageKeys.AccessToken, { session: true }) ||
    BrowserStorageService.get(BrowserStorageKeys.AccessToken);

  if (token) {
    return <Navigate to={Routes.Home} replace />;
  }

  return children;
};

export default PublicRoute;
