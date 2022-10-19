import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Seo } from 'components';
import { RoutesProps } from 'types';

import { routes as routesList } from './routes';

const DashBoardRoutesProvider = () => {
  const renderRoutes = routesList.map(({ path, component, withLayout }: RoutesProps) => {
    return (
      <Route key={path} path={path} element={<Seo withLayout={withLayout}>{component}</Seo>} />
    );
  });

  return <Routes>{renderRoutes}</Routes>;
};

export default DashBoardRoutesProvider;
