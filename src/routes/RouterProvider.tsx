import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Seo } from 'components';

import { RoutesProps } from '../types';

import { routes } from './routes';

const RouterProvider = () => {
  const renderRoutes = routes.map(({ path, component, withLayout }: RoutesProps) => {
    return (
      <Route key={path} path={path} element={<Seo withLayout={withLayout}>{component}</Seo>} />
    );
  });

  return (
    <BrowserRouter>
      <Routes>{renderRoutes}</Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
