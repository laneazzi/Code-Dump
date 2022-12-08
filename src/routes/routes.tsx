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
  UserPage,
  ProUsers,
  Tournament,
  TermsOfUse,
  FishingGuide,
  PrivacyPolicy,
  TournamentPartner,
} from '../containers';
import { RoutesProps, Routes } from '../types';

export const routes: RoutesProps[] = [
  {
    path: Routes.Error,
    isProtected: false,
    withLayout: false,
    component: <Error />,
  },

  {
    path: Routes.LogIn,
    isProtected: false,
    withLayout: false,
    component: <Home />,
  },
  {
    path: Routes.About,
    withLayout: false,
    isProtected: true,
    component: <About />,
  },
  {
    path: Routes.Contacts,
    withLayout: false,
    isProtected: true,
    component: <Contacts />,
  },
  {
    path: Routes.Help,
    withLayout: false,
    isProtected: false,
    component: <Help />,
  },
  {
    path: Routes.PrivacyPolicy,
    withLayout: false,
    isProtected: false,
    component: <PrivacyPolicy />,
  },
  {
    path: Routes.TermsOfUse,
    withLayout: false,
    isProtected: false,
    component: <TermsOfUse />,
  },
  {
    path: Routes.Home,
    withLayout: true,
    isProtected: true,
    component: <Forum />,
  },
  {
    path: Routes.Search,
    withLayout: true,
    isProtected: true,
    component: <Search />,
  },
  {
    path: Routes.Tournament,
    withLayout: true,
    isProtected: true,
    component: <Tournament />,
  },
  {
    path: Routes.Events,
    withLayout: true,
    isProtected: true,
    component: <Events />,
  },
  {
    path: Routes.Profile,
    withLayout: true,
    isProtected: true,
    component: <Profile />,
  },
  {
    path: Routes.Lives,
    withLayout: true,
    isProtected: true,
    component: <Lives />,
  },
  {
    path: Routes.UserPage,
    withLayout: true,
    isProtected: true,
    component: <UserPage />,
  },

  {
    path: Routes.FishingGuide,
    withLayout: true,
    isProtected: true,
    component: <FishingGuide />,
  },

  {
    path: Routes.ProUsers,
    withLayout: true,
    isProtected: true,
    component: <ProUsers />,
  },

  {
    path: Routes.TournamentPartner,
    withLayout: true,
    isProtected: true,
    component: <TournamentPartner />,
  },
];
