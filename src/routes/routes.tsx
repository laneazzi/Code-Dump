import {
  Help,
  Home,
  About,
  Error,
  Forum,
  Lives,
  Search,
  Events,
  Profile,
  Contacts,
  TermsOfUse,
  Tournament,
  PrivacyPolicy,
} from '../containers';
import { RoutesProps, Routes } from '../types';

export const routes: RoutesProps[] = [
  {
    path: Routes.Error,
    withLayout: false,
    component: <Error />,
  },

  {
    path: Routes.LogIn,
    withLayout: false,
    component: <Home />,
  },
  {
    path: Routes.About,
    withLayout: false,
    component: <About />,
  },
  {
    path: Routes.Contacts,
    withLayout: false,
    component: <Contacts />,
  },
  {
    path: Routes.Help,
    withLayout: false,
    component: <Help />,
  },
  {
    path: Routes.PrivacyPolicy,
    withLayout: false,
    component: <PrivacyPolicy />,
  },
  {
    path: Routes.TermsOfUse,
    withLayout: false,
    component: <TermsOfUse />,
  },
  {
    path: Routes.Home,
    withLayout: true,
    component: <Forum />,
  },
  {
    path: Routes.Search,
    withLayout: true,
    component: <Search />,
  },
  {
    path: Routes.Tournament,
    withLayout: true,
    component: <Tournament />,
  },
  {
    path: Routes.Events,
    withLayout: true,
    component: <Events />,
  },
  {
    path: Routes.Profile,
    withLayout: true,
    component: <Profile />,
  },
  {
    path: Routes.Lives,
    withLayout: true,
    component: <Lives />,
  },
];
