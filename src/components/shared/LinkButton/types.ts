export interface ILink {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  to: string;
  size?: 's' | 'm' | 'l';
  color?: 'secondary' | 'primary';
}
