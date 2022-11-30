import { Navigate } from 'react-router-dom';

import { Routes } from 'types';
import { BrowserStorageKeys, BrowserStorageService } from 'services';

const ProtectedRoute = ({ children }: any) => {
  const token =
    BrowserStorageService.get(BrowserStorageKeys.AccessToken, { session: true }) ||
    BrowserStorageService.get(BrowserStorageKeys.AccessToken);

  if (!token) {
    return <Navigate to={Routes.LogIn} replace />;
  }

  return children;
};

export default ProtectedRoute;
