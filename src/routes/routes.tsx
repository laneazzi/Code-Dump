import { Help, Home, About, Error, Contacts, TermsOfUse, PrivacyPolicy } from '../containers';
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
    path: Routes.PrivacyPolicy,
    component: <PrivacyPolicy />,
  },
  {
    path: Routes.TermsOfUse,
    component: <TermsOfUse />,
  },
];

export default routes;
