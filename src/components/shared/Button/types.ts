import { SyntheticEvent } from 'react';

export interface IButton {
  children: JSX.Element | React.ReactNode;
  className?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: 's' | 'm' | 'l';
  color?: 'secondary' | 'primary';
  type?: 'button' | 'submit' | 'reset';
}
