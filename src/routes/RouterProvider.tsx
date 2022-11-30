import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute, PublicRoute, Seo } from 'components';

import { RoutesProps } from '../types';

import { routes } from './routes';

const RouterProvider = () => {
  const renderRoutes = routes.map(({ path, component, withLayout, isProtected }: RoutesProps) => {
    const RoutesWrapper = isProtected ? ProtectedRoute : PublicRoute;
    return (
      <Route
        key={path}
        path={path}
        element={
          <RoutesWrapper>
            <Seo withLayout={withLayout}>{component}</Seo>
          </RoutesWrapper>
        }
      />
    );
  });

  return <Routes>{renderRoutes}</Routes>;
};

export default RouterProvider;
