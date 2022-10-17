import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';
import { SchemaLike } from 'yup/lib/types';

import { FormFieldNames } from './types';

export const composeFormSchema = <K extends FormFieldNames>(fields: K[]): AnyObjectSchema => {
  const schemaMap: Record<FormFieldNames, SchemaLike> = {
    email: Yup.string()
      .email('* Enter email address to finish adding new user')
      .required('* Enter email address to finish adding new user'),
  };

  const schema = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: schemaMap[field],
    }),
    {},
  );

  return Yup.object(schema);
};
