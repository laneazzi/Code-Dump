export type RoutesProps = {
  path: string;
  component: JSX.Element;
};

export enum Routes {
  Home = '/',
  Error = '*',
  Help = '/help',
  Forum = '/forum',
  About = '/about',
  Contacts = '/contacts',
  SignUpFor = '/sign-up',
  TermsOfUse = '/terms-of-use',
  PrivacyPolicy = '/privacy-policy',
}
