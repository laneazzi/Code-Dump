import { TUseInputValidate } from 'hooks/useInputValidate';

export type TDatePickerSelectProps = {
  title: string;
  size?: 'large';
  field?: TUseInputValidate;
  getDate?: (date: string) => void;
};
