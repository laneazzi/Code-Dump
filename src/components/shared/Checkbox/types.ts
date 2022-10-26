import { ReactNode } from 'react';

type errorType = any | null;

export type ColorType = 'default' | 'primary';

export interface ICheckbox {
  id: string;
  name: string;
  error: errorType;
  color?: ColorType;
  className?: string;
  [prop: string]: any;
  defaultChecked?: boolean;
  text: ReactNode | string | null | undefined;
}
