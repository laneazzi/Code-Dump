import * as yup from 'yup';
import { SubmitHandler, FieldValues } from 'react-hook-form';

import { IInputProps } from '../../shared/Input/types';

export type Field = IInputProps;

export type Form = {
  fields: Field[];
  schema: yup.AnyObjectSchema;
};

export interface IFormProps<TFieldValues extends FieldValues = FieldValues> {
  form: Form;
  submitText: string;
  className?: string;
  children?: React.ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
}
