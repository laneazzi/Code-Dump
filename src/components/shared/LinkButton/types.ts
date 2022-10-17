export interface ILink {
  children: React.ReactNode | string;
  className?: string;
  to: string;
  size?: 's' | 'm' | 'l';
  color?: 'secondary' | 'primary';
}
