import { TUseInputValidate } from 'hooks/useInputValidate';

export type TTextareaProps = {
  name?: string;
  field?: TUseInputValidate;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
