export type RoutesProps = {
  path: string;
  component: JSX.Element;
  withLayout: boolean;
};

export enum Routes {
  Home = '/',
  Error = '*',
  Help = '/help',
  About = '/about',
  Lives = '/lives',
  Forum = '/forum',
  Search = '/search',
  Events = '/events',
  Profile = '/profile',
  Contacts = '/contacts',
  SignUpFor = '/sign-up',
  Tournament = '/tournament',
  TermsOfUse = '/terms-of-use',
  PrivacyPolicy = '/privacy-policy',
}
