import { Error, Home } from '../containers';
import { RoutesProps, Routes } from '../types';

const routes: RoutesProps[] = [
  {
    path: Routes.Error,
    component: <Error />,
  },

  {
    path: Routes.Home,
    component: <Home />,
  },
];

export default routes;
