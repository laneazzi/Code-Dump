import {
  Help,
  Home,
  Forum,
  About,
  Error,
  Contacts,
  TermsOfUse,
  PrivacyPolice,
} from '../containers';
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
  {
    path: Routes.About,
    component: <About />,
  },
  {
    path: Routes.Contacts,
    component: <Contacts />,
  },
  {
    path: Routes.Help,
    component: <Help />,
  },
  {
    path: Routes.PrivacyPolice,
    component: <PrivacyPolice />,
  },
  {
    path: Routes.TermsOfUse,
    component: <TermsOfUse />,
  },
  {
    path: Routes.Forum,
    component: <Forum />,
  },
];

export default routes;
