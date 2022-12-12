import { TUseInputValidate } from 'hooks/useInputValidate';

export type TEventInputProps = {
  title: string;
  name?: string;
  small?: boolean;
  field?: TUseInputValidate;
  type?: 'number' | 'string';
};
