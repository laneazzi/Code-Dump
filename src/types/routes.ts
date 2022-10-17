export type RoutesProps = {
  path: string;
  component: JSX.Element;
};

export enum Routes {
  Error = '*',
  Home = '/',
}
